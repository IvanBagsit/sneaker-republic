const express = require("express");
const router = express.Router();

const imageUrls = require("../common/shoes.js");

const shoes = [
    {
        url: "airforce1",
        mainImage: {
            image: imageUrls.AF1Unisex1,
            code: "CDT1BB",
        },
        shoes: [
            {
                image: imageUrls.AF1Unisex1,
                code: "CDT1BB",
            },
            {
                image: imageUrls.AF1Women2,
                code: "LE2YKK",
            },
            {
                image: imageUrls.AF1Women5,
                code: "IKCIM2",
            },
            {
                image: imageUrls.AF1Women6,
                code: "ICE1SJ",
            },
        ],
        title: "Airforce 1",
        brand: "Nike",
        price: 800,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "airmax97",
        mainImage: {
            image: imageUrls.Airmax97Women,
            code: "GEYPSA",
        },
        shoes: [
            {
                image: imageUrls.Airmax97Women,
                code: "GEYPSA",
            },
            {
                image: imageUrls.Airmax97Men,
                code: "7LJMYI",
            },
            {
                image: imageUrls.Airmax97Unisex1,
                code: "WMRKKK",
            },
            {
                image: imageUrls.Airmax97Unisex2,
                code: "CWJHOU",
            },
        ],
        title: "Airmax 97",
        brand: "Nike",
        price: 600,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "fragment",
        mainImage: {
            image: imageUrls.FragmentUnisex1,
            code: "2QFV0K",
        },
        shoes: [
            {
                image: imageUrls.FragmentUnisex1,
                code: "2QFV0K",
            },
            {
                image: imageUrls.FragmentUnisex2,
                code: "M50F0I",
            },
        ],
        title: "Travis Scott x Fragment",
        brand: "Nike",
        price: 700,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "giannis",
        mainImage: {
            image: imageUrls.GiannisMen,
            code: "60SG71",
        },
        shoes: [
            {
                image: imageUrls.GiannisMen,
                code: "60SG71",
            },
        ],
        title: "Giannis",
        brand: "Nike",
        price: 800,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "jordan1",
        mainImage: {
            image: imageUrls.J1Unisex2,
            code: "1GQMJI",
        },
        shoes: [
            {
                image: imageUrls.J1Unisex2,
                code: "1GQMJI",
            },
            {
                image: imageUrls.J1Men1,
                code: "47QZUA",
            },
            {
                image: imageUrls.J1Unisex3,
                code: "32CXMQ",
            },
            {
                image: imageUrls.J1Unisex5,
                code: "1ZBXYK",
            },
        ],
        title: "Jordan 1",
        brand: "Nike",
        price: 600,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "jordan3",
        mainImage: {
            image: imageUrls.J3Men4,
            code: "J88STE",
        },
        shoes: [
            {
                image: imageUrls.J3Men4,
                code: "J88STE",
            },
            {
                image: imageUrls.J3Men1,
                code: "H1CKJI",
            },
            {
                image: imageUrls.J3Men2,
                code: "H1AWNR",
            },
            {
                image: imageUrls.J3Men3,
                code: "FNYPNY",
            },
        ],
        title: "Jordan 3",
        brand: "Nike",
        price: 700,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "joyride",
        mainImage: {
            image: imageUrls.JoyrideUnisex3,
            code: "Q0RLE7",
        },
        shoes: [
            {
                image: imageUrls.JoyrideUnisex3,
                code: "Q0RLE7",
            },
            {
                image: imageUrls.JoyrideUnisex1,
                code: "16S191",
            },
            {
                image: imageUrls.JoyrideUnisex2,
                code: "PDZSSW",
            },
            {
                image: imageUrls.JoyrideUnisex4,
                code: "87HFRW",
            },
        ],
        title: "Joyride",
        brand: "Nike",
        price: 700,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "alphabounce",
        mainImage: {
            image: imageUrls.AlphabounceUnisex1,
            code: "O7KL2K",
        },
        shoes: [
            {
                image: imageUrls.AlphabounceUnisex1,
                code: "O7KL2K",
            },
            {
                image: imageUrls.AlphabounceMen1,
                code: "7WUQUD",
            },
            {
                image: imageUrls.AlphabounceUnisex2,
                code: "2W6LRZ",
            },
            {
                image: imageUrls.AlphabounceUnisex3,
                code: "EV1IUF",
            },
        ],
        title: "Alphabounce",
        brand: "Adidas",
        price: 500,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "stansmith",
        mainImage: {
            image: imageUrls.StansmithUnisex1,
            code: "47K63S",
        },
        shoes: [
            {
                image: imageUrls.StansmithUnisex1,
                code: "47K63S",
            },
            {
                image: imageUrls.StansmithUnisex2,
                code: "RKTYNW",
            },
        ],
        title: "Stansmith",
        brand: "Adidas",
        price: 500,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "ultraboost",
        mainImage: {
            image: imageUrls.UltraboostUnisex1,
            code: "950H7C",
        },
        shoes: [
            {
                image: imageUrls.UltraboostUnisex1,
                code: "950H7C",
            },
            {
                image: imageUrls.UltraboostUnisex2,
                code: "UMQH3W",
            },
            {
                image: imageUrls.UltraboostWomen,
                code: "22B24S",
            },
        ],
        title: "Ultraboost",
        brand: "Adidas",
        price: 800,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
    {
        url: "yeezy",
        mainImage: {
            image: imageUrls.YeezyUnisex1,
            code: "RMD4N4",
        },
        shoes: [
            {
                image: imageUrls.YeezyUnisex1,
                code: "RMD4N4",
            },
            {
                image: imageUrls.YeezyMen,
                code: "BKTVIU",
            },
            {
                image: imageUrls.YeezyUnisex2,
                code: "MJOXR1",
            },
            {
                image: imageUrls.YeezyUnisex4,
                code: "7DNUEQ",
            },
        ],
        title: "Yeezy",
        brand: "Adidas",
        price: 700,
        sizes: [
            {
                availability: "Men",
                sizes: ["7", "8", "8.5", "9.5", "10", "11"],
            },
            {
                availability: "Women",
                sizes: ["5.5", "6.5", "7", "8"],
            },
        ],
    },
];

router.get("/", (req, res) => {
    const queryString = req.query.shoes;

    if (queryString) {
        const viewableShoe = shoes.find((item) => item.url === queryString);
        if (viewableShoe) {
            res.status(200).send(viewableShoe);
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
