const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const imageUrls = require("../common/shoes.js");
const { SneakersModel } = require("../model/sneakers.js");
const { User } = require("../model/users.js");
const sendEmail = require("../common/email.js");

// accepts "Content-Type":"multipart/form-data"
const multer = require("multer");
const createCode = require("../common/code.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/get-all-sneakers", async (req, res) => {
    try {
        const result = await SneakersModel.find({});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error: error });
    }
});

router.post(
    "/insert-sneaker",
    upload.array("attachments"),
    async (req, res) => {
        const createNewCode = async () => {
            const code = createCode();
            const result = await SneakersModel.find({
                $or: [{ "mainImage.code": code }, { "shoes.code": code }],
            });
            if (result.length > 0) {
                console.log(`${code} already existing. Creating new code...`);
                createNewCode();
            } else {
                console.log(`created code: ${code}`);
                return code;
            }
        };

        const fileTypes = req.body.type;
        const attachments = [];

        for (let i = 0; i < req.files.length; i++) {
            attachments.push({
                fileName: req.files[i].originalname,
                content: req.files[i].buffer,
                code: await createNewCode(),
                type: Array.isArray(fileTypes) ? fileTypes[i] : fileTypes,
            });
        }

        const subShoes = attachments;
        const formValues = JSON.parse(req.body.formValues);

        if (attachments && formValues) {
            const newSneakers = new SneakersModel({
                url: formValues.url,
                mainImage: attachments[0],
                shoes: subShoes || null,
                title: formValues.name,
                brand: formValues.brand,
                price: formValues.price,
                isFeatured: formValues.isFeatured,
                sizes: [
                    {
                        availability: "Men",
                        sizes: formValues.menSizes,
                    },
                    {
                        availability: "Women",
                        sizes: formValues.womenSizes,
                    },
                ],
            });

            console.log("uploading sneaker...");
            const result = await newSneakers.save();
            if (result) {
                console.log("sneaker uploaded!");
                res.status(200).send({ message: "sneaker uploaded!" });
            } else {
                console.log("uploading of sneaker failed");
                res.status(500).json({
                    message: "uploading of sneaker failed",
                });
            }
        } else {
            res.status(404).send({
                message: "No form values or file attached",
            });
        }
    }
);

router.delete("/delete-sneaker/:id", async (req, res) => {
    const id = req.params.id;
    const result = await SneakersModel.deleteOne({ _id: id });
    if (result.deletedCount > 0) {
        console.log(`${id} deleted successfully`);
        res.status(200).json({
            message: "Sneaker deleted successfully.",
            id: id,
        });
    } else {
        console.log(`${id} not found`);
        res.status(404).json({ message: "Sneaker not found.", id: id });
    }
});

router.put("/update-sneaker/:id", async (req, res) => {
    const id = req.params.id;
    const { name, brand, price, menSizes, womenSizes } = req.body;

    const result = await SneakersModel.updateOne(
        { _id: id },
        {
            $set: {
                title: name,
                brand: brand,
                price: price,
                "sizes.0.sizes": menSizes,
                "sizes.1.sizes": womenSizes,
            },
        }
    );

    if (result) {
        console.log("Sneaker updated successfully.", id);
        res.status(200).send({ message: "Sneaker updated successfully.", id });
    } else {
        console.log("Sneaker not found", id);
        res.status(404).send({ message: "Sneaker not found.", id });
    }
});

router.post("/signup/user", async (req, res) => {
    const { username, password, role } = req.body;

    const existingUser = await User.find({ username: username });

    if (existingUser) {
        console.log("Username already existing");
        res.status(500).send({ message: "Username already existing" });
    } else {
        const newUser = new User({
            username: username,
            password: password,
            role: role,
            isLoggedIn: false,
        });

        const result = await newUser.save();

        if (result) {
            console.log("user uploaded!", result);
            res.status(200).send(result);
        } else {
            console.log("uploading of user failed", newUser);
            res.status(500).send({ message: "uploading of user failed" });
        }
    }
});

router.post("/login/user", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });

        if (user) {
            const isPasswordValid = await bcrypt.compare(
                password,
                user.password
            );

            if (isPasswordValid) {
                res.status(200).send({
                    message: "Login Successful",
                });
            } else {
                res.status(401).send({
                    message: "Incorrect Credentials",
                });
            }
        } else {
            res.status(404).send({
                message: "Incorrect Credentials",
                user: username,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Internal Server Error",
        });
    }
});

router.get("/login/forgot-password", async (req, res) => {
    const user = await User.findOne({
        $and: [{ username: "admin" }, { role: "admin" }],
    });
    if (user) {
        const adminAccount = "Admin Acount: admin:admin";
        const subject = process.env.EMAIL_SUBJECT_FORGOT_PASSWORD;
        const result = await sendEmail(adminAccount, subject);
        res.status(result.status).send(result.message);
    } else {
        res.status(404).send({
            message: "No Admin Account stored in the database",
        });
    }
});

module.exports = router;
