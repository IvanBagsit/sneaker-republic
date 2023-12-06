const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// accepts "Content-Type":"multipart/form-data"
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_KEY,
        pass: process.env.EMAIL_APP_KEY,
    },
});

router.post("/send-order", upload.array("attachments"), (req, res) => {
    let shoesDetails;
    if (Array.isArray(req.body.shoes)) {
        const shoesArray = req.body.shoes.map((item) => {
            return JSON.parse(item);
        });
        shoesDetails = shoesArray.map(
            (item) =>
                `Shoes: ${item.title}
            Brand: ${item.brand}
            Code: ${item.mainImage.code}
            Size: ${item.sizes.sizes} ${item.sizes.availability}
            Price: ${item.price}
            Quantity: ${item.quantity}
            Total Price: ${item.totalPrice}
    
            `
        );
    } else {
        const shoesArray = JSON.parse(req.body.shoes);
        shoesDetails = `Shoes: ${shoesArray.title}
        Brand: ${shoesArray.brand}
        Code: ${shoesArray.mainImage.code}
        Size: ${shoesArray.sizes.sizes} ${shoesArray.sizes.availability}
        Price: ${shoesArray.price}
        Quantity: ${shoesArray.quantity}
        Total Price: ${shoesArray.totalPrice}

        `;
    }

    const formValues = JSON.parse(req.body.formValues);

    const message = `
        Order Recieved! Please see details below:

        Customer Details
        Name: ${formValues.fullName}
        Email: ${formValues.email}
        Contact Number: ${formValues.contactNumber}
        LBC Pickup Branch: ${formValues.pickUpBranch}

        Order Details
        ${Array.isArray(req.body.shoes) ? shoesDetails.join("") : shoesDetails}
    `;

    const attachments = req.files.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
    }));

    const mailOptions = {
        from: process.env.EMAIL_KEY,
        to: process.env.EMAIL_RECEIVER,
        subject: process.env.EMAIL_SUBJECT,
        text: message,
        attachments: attachments,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error.toString());
            res.status(500).send(error.toString());
        } else {
            console.log("Email sent: ", info);
            res.status(200).send("Email sent: " + info.response);
        }
    });
});

module.exports = router;
