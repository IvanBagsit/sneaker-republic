const express = require("express");
const router = express.Router();
const { SneakersModel } = require("../model/sneakers.js");

router.get("/", async (req, res) => {
    const queryString = req.query.shoes;

    if (queryString) {
        console.log("queryString: ", queryString);
        const sneaker = await SneakersModel.findOne({ url: queryString });
        if (sneaker) {
            console.log("Successful retrieved");
            res.status(200).send(sneaker);
        } else {
            res.status(404).send({
                message: `${queryString} can't be found`,
            });
        }
    } else {
        res.status(404).send({
            message: "queryString undefined",
        });
    }
});

router.get("/view-subshoes/:queryString/:code", async (req, res) => {
    const queryString = req.params.queryString;
    const code = req.params.code;

    if (queryString) {
        console.log("queryString: ", queryString);
        const sneaker = await SneakersModel.findOne({ url: queryString });
        if (sneaker) {
            console.log("Successful retrieved sneaker");
            const details = sneaker.shoes.find((item) => item.code === code);
            if (details) {
                console.log("Successful retrieved sneaker details in .shoes");
                res.status(200).send(details);
            } else {
                console.log(
                    "Successful retrieved sneaker details in .mainImage"
                );
                const details = sneaker.mainImage;
                res.status(200).send(details);
            }
        } else {
            res.status(404).send({
                message: `${queryString} can't be found`,
            });
        }
    } else {
        res.status(404).send({
            message: "queryString undefined",
        });
    }
});

module.exports = router;
