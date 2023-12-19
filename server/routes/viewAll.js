const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");
const { SneakersModel } = require("../model/sneakers.js");

router.get("/shoes", async (req, res) => {
    const sneakers = await SneakersModel.find({});
    res.status(200).send(sneakers);
});

module.exports = router;
