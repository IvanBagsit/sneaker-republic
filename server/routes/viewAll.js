const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");

router.get("/shoes", (req, res) => {
    const itemData = [
        {
            img: imageUrls.AF1Unisex1,
            name: "Nike Airforce 1",
            inventory: "Price: ₱800",
            link: "airforce1",
        },
        {
            img: imageUrls.Airmax97Women,
            name: "Nike Airmax 97",
            inventory: "Price: ₱600",
            link: "airmax97",
        },
        {
            img: imageUrls.FragmentUnisex1,
            name: "Nike Travis Scott x Fragment",
            inventory: "Price: ₱700",
            link: "fragment",
        },
        {
            img: imageUrls.GiannisMen,
            name: "Nike Giannis",
            inventory: "Price: ₱800",
            link: "giannis",
        },
        {
            img: imageUrls.J1Unisex2,
            name: "Nike Jordan 1",
            inventory: "Price: ₱600",
            link: "jordan1",
        },
        {
            img: imageUrls.J3Men4,
            name: "Nike Jordan 3",
            inventory: "Price: ₱700",
            link: "jordan3",
        },
        {
            img: imageUrls.JoyrideUnisex3,
            name: "Nike Joyride",
            inventory: "Price: ₱700",
            link: "joyride",
        },
        {
            img: imageUrls.AlphabounceUnisex1,
            name: "Adidas Alphabounce",
            inventory: "Price: ₱500",
            link: "alphabounce",
        },
        {
            img: imageUrls.StansmithUnisex1,
            name: "Adidas Stansmith",
            inventory: "Price: ₱500",
            link: "stansmith",
        },
        {
            img: imageUrls.UltraboostUnisex1,
            name: "Adidas Ultraboost",
            inventory: "Price: ₱800",
            link: "ultraboost",
        },
        {
            img: imageUrls.YeezyUnisex1,
            name: "Adidas Yeezy",
            inventory: "Price: ₱700",
            link: "yeezy",
        },
    ];

    res.status(200).send(itemData);
});

module.exports = router;
