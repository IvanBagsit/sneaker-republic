const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");

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
