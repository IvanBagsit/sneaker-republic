const express = require("express");
const router = express.Router();

const { SneakersModel } = require("../model/sneakers.js");

router.get("/shoes", async (req, res) => {
    const sneakers = await SneakersModel.find({});
    const updatedSneakers = sneakers.map((item) => {
        const { _doc } = item;
        return {
            ..._doc,
            shoes: null,
        };
    });
    res.status(200).send(updatedSneakers);
});

module.exports = router;
