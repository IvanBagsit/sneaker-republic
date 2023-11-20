import {
    AF1Unisex1,
    AF1Unisex2,
    AF1Unisex3,
    AF1Unisex4,
    AF1Unisex5,
    AF1Women1,
    AF1Women2,
    AF1Women3,
    AF1Women4,
    AF1Women5,
    AF1Women6,
    Airmax97Men,
    Airmax97Unisex1,
    Airmax97Unisex2,
    Airmax97Women,
    AlphabounceMen1,
    AlphabounceUnisex1,
    AlphabounceUnisex2,
    AlphabounceUnisex3,
    FragmentMen,
    FragmentUnisex1,
    FragmentUnisex2,
    GiannisMen,
    J1Men1,
    J1Men2,
    J1Unisex1,
    J1Unisex2,
    J1Unisex3,
    J1Unisex4,
    J1Unisex5,
    J1UnisexUV,
    J3Men1,
    J3Men2,
    J3Men3,
    J3Men4,
    JoyrideUnisex1,
    JoyrideUnisex2,
    JoyrideUnisex3,
    JoyrideUnisex4,
    StansmithUnisex1,
    StansmithUnisex2,
    UltraboostUnisex1,
    UltraboostUnisex2,
    UltraboostWomen,
    YeezyMen,
    YeezyUnisex1,
    YeezyUnisex2,
    YeezyUnisex3,
    YeezyUnisex4,
    YeezyUnisex5,
} from "../Common/Shoes";

import { Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useLocation } from "react-router-dom";
import styles from "./View.module.css";

const View = () => {
    const shoes = {
        Nike: {
            AF1: {
                shoes: [
                    {
                        image: AF1Unisex1,
                        code: "CDT1BB",
                    },
                    {
                        image: AF1Unisex2,
                        code: "E3KDKH",
                    },
                    {
                        image: AF1Unisex3,
                        code: "T7KG2N",
                    },
                    {
                        image: AF1Unisex4,
                        code: "NVDU38",
                    },
                    {
                        image: AF1Unisex5,
                        code: "YQNZN2",
                    },
                    {
                        image: AF1Women1,
                        code: "821YVG",
                    },
                    {
                        image: AF1Women2,
                        code: "LE2YKK",
                    },
                    {
                        image: AF1Women3,
                        code: "XQUTY7",
                    },
                    {
                        image: AF1Women4,
                        code: "4AW5HF",
                    },
                    {
                        image: AF1Women5,
                        code: "IKCIM2",
                    },
                    {
                        image: AF1Women6,
                        code: "ICE1SJ",
                    },
                ],
                title: "Airforce 1",
                brand: "Nike",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            Airmax97: {
                shoes: [
                    {
                        image: Airmax97Men,
                        code: "7LJMYI",
                    },
                    {
                        image: Airmax97Unisex1,
                        code: "WMRKKK",
                    },
                    {
                        image: Airmax97Unisex2,
                        code: "CWJHOU",
                    },
                    {
                        image: Airmax97Women,
                        code: "GEYPSA",
                    },
                ],
                title: "Airmax 97",
                brand: "Nike",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            Fragment: {
                shoes: [
                    {
                        image: FragmentMen,
                        code: "TY64SO",
                    },
                    {
                        image: FragmentUnisex1,
                        code: "2QFV0K",
                    },
                    {
                        image: FragmentUnisex2,
                        code: "M50F0I",
                    },
                ],
                title: "Travis Scott x Fragment",
                brand: "Nike",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            Giannis: {
                shoes: [
                    {
                        image: GiannisMen,
                        code: "60SG71",
                    },
                ],
                title: "Giannis",
                brand: "Nike",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            J1: {
                shoes: [
                    {
                        image: J1Men1,
                        code: "47QZUA",
                    },
                    {
                        image: J1Men2,
                        code: "6ITHBZ",
                    },
                    {
                        image: J1Unisex1,
                        code: "5M9OHJ",
                    },
                    {
                        image: J1Unisex2,
                        code: "1GQMJI",
                    },
                    {
                        image: J1Unisex3,
                        code: "32CXMQ",
                    },
                    {
                        image: J1Unisex4,
                        code: "U5B6AO",
                    },
                    {
                        image: J1Unisex5,
                        code: "1ZBXYK",
                    },
                    {
                        image: J1UnisexUV,
                        code: "YRBYHY",
                    },
                ],
                title: "Jordan 1",
                brand: "Nike",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            J3: {
                shoes: [
                    {
                        image: J3Men1,
                        code: "H1CKJI",
                    },
                    {
                        image: J3Men2,
                        code: "H1AWNR",
                    },
                    {
                        image: J3Men3,
                        code: "FNYPNY",
                    },
                    {
                        image: J3Men4,
                        code: "J88STE",
                    },
                ],
                title: "Jordan 3",
                brand: "Nike",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            Joyride: {
                shoes: [
                    {
                        image: JoyrideUnisex1,
                        code: "16S191",
                    },
                    {
                        image: JoyrideUnisex2,
                        code: "PDZSSW",
                    },
                    {
                        image: JoyrideUnisex3,
                        code: "Q0RLE7",
                    },
                    {
                        image: JoyrideUnisex4,
                        code: "87HFRW",
                    },
                ],
                title: "Joyride",
                brand: "Nike",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
        },
        Adidas: {
            Alphabounce: {
                shoes: [
                    {
                        image: AlphabounceMen1,
                        code: "7WUQUD",
                    },
                    {
                        image: AlphabounceUnisex1,
                        code: "O7KL2K",
                    },
                    {
                        image: AlphabounceUnisex2,
                        code: "2W6LRZ",
                    },
                    {
                        image: AlphabounceUnisex3,
                        code: "EV1IUF",
                    },
                ],
                title: "Alphabounce",
                brand: "Adidas",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            Stansmith: {
                shoes: [
                    {
                        image: StansmithUnisex1,
                        code: "47K63S",
                    },
                    {
                        image: StansmithUnisex2,
                        code: "RKTYNW",
                    },
                ],
                title: "Stansmith",
                brand: "Adidas",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            Ultraboost: {
                shoes: [
                    {
                        image: UltraboostUnisex1,
                        code: "950H7C",
                    },
                    {
                        image: UltraboostUnisex2,
                        code: "UMQH3W",
                    },
                    {
                        image: UltraboostWomen,
                        code: "22B24S",
                    },
                ],
                title: "Ultraboost",
                brand: "Adidas",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
            Yeezy: {
                shoes: [
                    {
                        image: YeezyMen,
                        code: "BKTVIU",
                    },
                    {
                        image: YeezyUnisex1,
                        code: "RMD4N4",
                    },
                    {
                        image: YeezyUnisex2,
                        code: "MJOXR1",
                    },
                    {
                        image: YeezyUnisex3,
                        code: "E1KGLE",
                    },
                    {
                        image: YeezyUnisex4,
                        code: "7DNUEQ",
                    },
                    {
                        image: YeezyUnisex5,
                        code: "N09EJU",
                    },
                ],
                title: "Yeezy",
                brand: "Adidas",
                price: 500,
                sizes: [
                    {
                        availability: "Men",
                        sizes: [
                            "7 US",
                            "8 US",
                            "8.5 US",
                            "9.5 US",
                            "10 US",
                            "11 US",
                        ],
                    },
                    {
                        availability: "Women",
                        sizes: ["5.5 US", "6.5 US", "7 US", "8 US"],
                    },
                ],
            },
        },
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const viewableShoes = queryParams.get("shoes");

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div style={{ width: "40%" }}>
                    <img
                        src={shoes.Nike.AF1.shoes[0].image}
                        alt="main-image"
                        className={styles.mainImage}
                    />
                </div>
                <div
                    style={{
                        width: "40%",
                    }}
                >
                    <div className={styles.details}>
                        <h1>{shoes.Nike.AF1.title}</h1>
                    </div>
                    <div className={styles.details}>
                        Brand: {shoes.Nike.AF1.brand}
                    </div>
                    <div className={styles.details}>
                        Code: {shoes.Nike.AF1.shoes[0].code}
                    </div>
                    <div className={styles.details}>
                        P{shoes.Nike.AF1.price}
                    </div>
                    <div className={styles.details}>
                        {shoes.Nike.AF1.sizes[0].availability}
                    </div>
                    <div className={styles.details}>
                        Select Size: {shoes.Nike.AF1.sizes[0].sizes}
                    </div>
                    <div className={styles.details}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: "40%", marginRight: "1%" }}
                        >
                            Buy Now
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<ShoppingCartIcon />}
                            sx={{ width: "40%", marginLeft: "1%" }}
                        >
                            Add to Cart
                        </Button>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.details}>Informations:</div>
                        <div className={styles.subDetails}>
                            Delivery Fee: Free
                        </div>
                        <div className={styles.subDetails}>
                            Mode of Payment: BDO,BPI, GCash
                        </div>
                        <div className={styles.subDetails}>
                            Mode of Delivery: LBC
                        </div>
                    </div>
                    <div>Other shoes image</div>
                </div>
            </div>
        </div>
    );
};

export default View;
