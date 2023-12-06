const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");

router.get("/menu", (req, res) => {
    const options = [
        {
            name: "Home",
            isDropDown: false,
            subOptions: [],
            haslink: true,
            link: "/home",
        },
        {
            name: "View All",
            isDropDown: false,
            subOptions: [],
            haslink: true,
            link: "/view-all",
        },
        {
            name: "Male",
            isDropDown: true,
            subOptions: [
                {
                    brand: "Nike",
                    isDropDown: true,
                    shoes: [
                        "Airforce 1",
                        "Airmax 97",
                        "Fragment",
                        "Giannis",
                        "Jordan 1",
                        "Jordan 3",
                        "Joyride",
                    ],
                },
                {
                    brand: "Addidas",
                    isDropDown: true,
                    shoes: ["Alphabounce", "Stansmith", "Ultraboost", "Yeezy"],
                },
            ],
            haslink: false,
        },
        {
            name: "Female",
            isDropDown: true,
            subOptions: [
                {
                    brand: "Nike",
                    isDropDown: true,
                    shoes: [
                        "Airforce 1",
                        "Airmax 97",
                        "Fragment",
                        "Jordan 1",
                        "Joyride",
                    ],
                },
                {
                    brand: "Addidas",
                    isDropDown: true,
                    shoes: ["Alphabounce", "Stansmith", "Ultraboost", "Yeezy"],
                },
            ],
            haslink: false,
        },
    ];

    res.status(200).send(options);
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
