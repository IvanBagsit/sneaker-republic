const express = require("express");
const router = express.Router();

const { MenuOptions } = require("../model/options.js");
const { SneakersModel } = require("../model/sneakers.js");

router.get("/menu/:username", async (req, res) => {
    const data = await MenuOptions.findOne({ "options.name": "Home" });
    if (data) {
        let menu;
        const username = req.params.username;
        if (username !== "none") {
            menu = data.options.filter((item) => item.name !== "Login");
        } else {
            menu = data.options.filter(
                (item) =>
                    item.name !== "Logout" && item.name !== "Admin Dashboard"
            );
        }
        console.log("menu options", menu);
        res.status(200).send(menu);
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
