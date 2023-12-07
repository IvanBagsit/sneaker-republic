const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");
const { mongoose } = require("../index.js");

const subOptionSchema = new mongoose.Schema({
    brand: String,
    isDropDown: Boolean,
    shoes: [String],
});

const menuOptionSchema = new mongoose.Schema({
    name: String,
    isDropDown: Boolean,
    subOptions: [subOptionSchema],
    haslink: Boolean,
    link: String,
});

const menuOptionsSchema = new mongoose.Schema({
    options: [menuOptionSchema],
});

const MenuOptions = mongoose.model("MenuOptions", menuOptionsSchema, "options");

router.get("/menu", async (req, res) => {
    const data = await MenuOptions.findOne({ "options.name": "Home" });
    if (data) {
        res.status(200).send(data.options);
    } else {
        res.status(500).send("Internal Server Error");
    }
});

router.get("/featured", (req, res) => {
    const featuredShoes = [
        {
            name: "Airforce 1",
            brand: "Nike",
            price: 500,
            image: imageUrls.AF1Unisex1,
            link: "/view?shoes=airforce1",
        },
        {
            name: "Jordan 1",
            brand: "Nike",
            price: 600,
            image: imageUrls.J1Unisex2,
            link: "/view?shoes=jordan1",
        },
        {
            name: "Jordan 3",
            brand: "Nike",
            price: 550,
            image: imageUrls.J3Men4,
            link: "/view?shoes=jordan3",
        },
    ];
    res.status(200).send(featuredShoes);
});

module.exports = router;
