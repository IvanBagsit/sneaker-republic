import {
    AF1Unisex1,
    AF1Women2,
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
    J1Unisex2,
    J1Unisex3,
    J1Unisex5,
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
    YeezyUnisex4,
} from "../Common/Shoes";

import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useLocation } from "react-router-dom";
import styles from "./View.module.css";

const View = () => {
    const shoes = [
        {
            url: "airforce1",
            shoes: [
                {
                    image: AF1Unisex1,
                    code: "CDT1BB",
                },
                {
                    image: AF1Women2,
                    code: "LE2YKK",
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
            shoes: [
                {
                    image: FragmentUnisex1,
                    code: "2QFV0K",
                },
                {
                    image: FragmentMen,
                    code: "TY64SO",
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
            shoes: [
                {
                    image: J1Unisex2,
                    code: "1GQMJI",
                },
                {
                    image: J1Men1,
                    code: "47QZUA",
                },
                {
                    image: J1Unisex3,
                    code: "32CXMQ",
                },
                {
                    image: J1Unisex5,
                    code: "1ZBXYK",
                },
            ],
            title: "Jordan 1",
            brand: "Nike",
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
            url: "jordan3",
            shoes: [
                {
                    image: J3Men4,
                    code: "J88STE",
                },
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
            ],
            title: "Jordan 3",
            brand: "Nike",
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
            url: "joyride",
            shoes: [
                {
                    image: JoyrideUnisex3,
                    code: "Q0RLE7",
                },
                {
                    image: JoyrideUnisex1,
                    code: "16S191",
                },
                {
                    image: JoyrideUnisex2,
                    code: "PDZSSW",
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
            shoes: [
                {
                    image: AlphabounceUnisex1,
                    code: "O7KL2K",
                },
                {
                    image: AlphabounceMen1,
                    code: "7WUQUD",
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
            shoes: [
                {
                    image: YeezyUnisex1,
                    code: "RMD4N4",
                },
                {
                    image: YeezyMen,
                    code: "BKTVIU",
                },
                {
                    image: YeezyUnisex2,
                    code: "MJOXR1",
                },
                {
                    image: YeezyUnisex4,
                    code: "7DNUEQ",
                },
            ],
            title: "Yeezy",
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
    ];

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const viewableShoes = queryParams.get("shoes");

    const viewedShoes = shoes.find((item) => item.url === viewableShoes);

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div style={{ width: "40%" }}>
                    <img
                        src={viewedShoes.shoes[0].image}
                        alt="viewedshoes"
                        className={styles.mainImage}
                    />
                </div>
                <div
                    style={{
                        width: "40%",
                    }}
                >
                    <div className={styles.details}>
                        <h1>{viewedShoes.title}</h1>
                    </div>
                    <div className={styles.details}>
                        Brand: {viewedShoes.brand}
                    </div>
                    <div className={styles.details}>
                        Code: {viewedShoes.shoes[0].code}
                    </div>
                    <div className={styles.details}>
                        Price: P{viewedShoes.price}
                    </div>
                    <div className={styles.details}>
                        {viewedShoes.sizes[0].availability}
                    </div>
                    <div className={styles.details}>
                        <div>
                            Men size (US):{" "}
                            {viewedShoes.sizes[0].sizes.map(
                                (items) => `${items}, `
                            )}
                        </div>
                        <div>
                            Women size (US):{" "}
                            {viewedShoes.sizes[1].sizes.map(
                                (items) => `${items}, `
                            )}
                        </div>
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
                            Shipping Fee:{" "}
                            <b style={{ color: "#1976d1" }}>FREE</b>
                        </div>
                        <div className={styles.subDetails}>
                            Mode of Payment: BDO, BPI, GCash
                        </div>
                        <div className={styles.subDetails}>
                            Mode of Delivery: LBC
                        </div>
                    </div>
                    <div>
                        {viewedShoes.shoes.map((shoes) => {
                            return (
                                <img
                                    src={shoes.image}
                                    alt={shoes.code}
                                    style={{
                                        height: "15vh",
                                        width: "15vh",
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
