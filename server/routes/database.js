const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");
const { mongoose } = require("../index.js");

const mainImage = new mongoose.Schema({
    image: String,
    code: String,
});

const sizes = new mongoose.Schema({
    availability: String,
    sizes: [String],
});

const sneakers = new mongoose.Schema({
    url: String,
    mainImage: mainImage,
    shoes: [mainImage],
    title: String,
    brand: String,
    price: Number,
    sizes: [sizes],
});

const SneakersModel = mongoose.model("Sneakers", sneakers, "sneakers-details");

router.post("/insert-shoes", async (req, res) => {
    const body = req.body;
    const newSneakers = new SneakersModel({
        url: body.url,
        mainImage: body.mainImage,
        shoes: body.shoes,
        title: body.title,
        brand: body.brand,
        price: body.price,
        sizes: body.sizes,
    });

    console.log("uploading sneaker...", newSneakers);
    const savedData = await newSneakers.save();
    if (savedData) {
        console.log("sneaker uploaded!", savedData);
        res.status(200).send(savedData);
    } else {
        res.status(500).json({ message: "uploading of sneaker failed" });
    }
});

module.exports = router;
