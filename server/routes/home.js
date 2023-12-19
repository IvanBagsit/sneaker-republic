const express = require("express");
const router = express.Router();

const { MenuOptions } = require("../model/options.js");
const { SneakersModel } = require("../model/sneakers.js");
const { User } = require("../model/users.js");

router.get("/menu", async (req, res) => {
    const data = await MenuOptions.findOne({ "options.name": "Home" });
    if (data) {
        const admin = await User.findOne({ role: "admin" });
        if (admin) {
            let menu;
            if (admin.isLoggedIn) {
                menu = data.options.filter((item) => item.name !== "Login");
            } else {
                menu = data.options.filter(
                    (item) =>
                        item.name !== "Logout" &&
                        item.name !== "Admin Dashboard"
                );
            }
            console.log("menu options", menu);
            res.status(200).send(menu);
        } else {
            console.log(`Admin account can't be found`);
            res.status(404).send({ message: `Admin account can't be found` });
        }
    } else {
        console.log("menu options null/undefined");
        res.status(500).send("Internal Server Error");
    }
});

router.get("/featured", async (req, res) => {
    const featuredSneakers = await SneakersModel.find({ isFeatured: true });
    res.status(200).send(featuredSneakers);
});

module.exports = router;
