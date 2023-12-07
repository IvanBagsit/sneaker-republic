const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");
const { SneakersModel } = require("../model/sneakers.js");

router.post("/insert-sneaker", async (req, res) => {
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
    const result = await newSneakers.save();
    if (result) {
        console.log("sneaker uploaded!", result);
        res.status(200).send(result);
    } else {
        console.log("uploading of sneaker failed", newSneakers);
        res.status(500).json({ message: "uploading of sneaker failed" });
    }
});

router.delete("/delete-sneaker/:value", async (req, res) => {
    const value = req.params.value;
    const result = await SneakersModel.deleteOne({ url: value });
    if (result.deletedCount > 0) {
        console.log(`${value} deleted successfully`);
        res.status(200).json({
            message: "Sneaker deleted successfully.",
            value: value,
        });
    } else {
        console.log(`${value} not found`);
        res.status(404).json({ message: "Sneaker not found.", value: value });
    }
});

router.put("/update-sneaker/:value", async (req, res) => {
    const value = req.params.value;
    const updateFields = {};

    for (const key in req.body) {
        if (req.body[key] !== "" && req.body[key] !== undefined) {
            updateFields[key] = req.body[key];
        }
    }

    const result = await SneakersModel.updateOne(
        { url: value },
        { $set: updateFields }
    );

    if (result) {
        console.log("Sneaker updated successfully.", value);
        res.json({ message: "Sneaker updated successfully.", value });
    } else {
        console.log("Sneaker not found");
        res.status(404).json({ message: "Sneaker not found." });
    }
});

module.exports = router;
