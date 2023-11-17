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

import { useLocation } from "react-router-dom";
import styles from "./View.module.css";

const View = () => {
    const shoes = {
        Nike: {
            AF1: {
                images: [
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
                images: [
                    Airmax97Men,
                    Airmax97Unisex1,
                    Airmax97Unisex2,
                    Airmax97Women,
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
                images: [FragmentMen, FragmentUnisex1, FragmentUnisex2],
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
                images: [GiannisMen],
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
                images: [
                    J1Men1,
                    J1Men2,
                    J1Unisex1,
                    J1Unisex2,
                    J1Unisex3,
                    J1Unisex4,
                    J1Unisex5,
                    J1UnisexUV,
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
                images: [J3Men1, J3Men2, J3Men3, J3Men4],
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
                images: [
                    JoyrideUnisex1,
                    JoyrideUnisex2,
                    JoyrideUnisex3,
                    JoyrideUnisex4,
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
                images: [
                    AlphabounceMen1,
                    AlphabounceUnisex1,
                    AlphabounceUnisex2,
                    AlphabounceUnisex3,
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
                images: [StansmithUnisex1, StansmithUnisex2],
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
                images: [UltraboostUnisex1, UltraboostUnisex2, UltraboostWomen],
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
                images: [
                    YeezyMen,
                    YeezyUnisex1,
                    YeezyUnisex2,
                    YeezyUnisex3,
                    YeezyUnisex4,
                    YeezyUnisex5,
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
                <div>
                    <img
                        src={shoes.Nike.AF1.images[0]}
                        alt="main-image"
                        className={styles.mainImage}
                    />
                </div>
                <div>
                    <div>
                        <h3>{shoes.Nike.AF1.title}</h3>
                    </div>
                    <div>{shoes.Nike.AF1.brand}</div>
                    <div>{shoes.Nike.AF1.price}</div>
                    <div>{shoes.Nike.AF1.sizes[0].availability}</div>
                    <div>Select Size: {shoes.Nike.AF1.sizes[0].sizes}</div>
                    <div>Buy</div>
                    <div>Add to Cart</div>
                    <div>
                        Informations - Delivery, Fees, Mode of Payment, message
                        us
                    </div>
                    <div>Other shoes images</div>
                </div>
            </div>
        </div>
    );
};

export default View;
