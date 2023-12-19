const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");
const { MenuOptions } = require("../model/options.js");
const { SneakersModel } = require("../model/sneakers.js");

router.get("/menu", async (req, res) => {
    const data = await MenuOptions.findOne({ "options.name": "Home" });
    if (data) {
        console.log("menu options", data);
        res.status(200).send(data.options);
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
