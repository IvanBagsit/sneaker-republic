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
            AF1: [
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
            Airmax97: [
                Airmax97Men,
                Airmax97Unisex1,
                Airmax97Unisex2,
                Airmax97Women,
            ],
            Fragment: [FragmentMen, FragmentUnisex1, FragmentUnisex2],
            Giannis: [GiannisMen],
            J1: [
                J1Men1,
                J1Men2,
                J1Unisex1,
                J1Unisex2,
                J1Unisex3,
                J1Unisex4,
                J1Unisex5,
                J1UnisexUV,
            ],
            J3: [J3Men1, J3Men2, J3Men3, J3Men4],
            Joyride: [
                JoyrideUnisex1,
                JoyrideUnisex2,
                JoyrideUnisex3,
                JoyrideUnisex4,
            ],
        },
        Adidas: {
            Alphabounce: [
                AlphabounceMen1,
                AlphabounceUnisex1,
                AlphabounceUnisex2,
                AlphabounceUnisex3,
            ],
            Stansmith: [StansmithUnisex1, StansmithUnisex2],
            Ultraboost: [UltraboostUnisex1, UltraboostUnisex2, UltraboostWomen],
            Yeezy: [
                YeezyMen,
                YeezyUnisex1,
                YeezyUnisex2,
                YeezyUnisex3,
                YeezyUnisex4,
                YeezyUnisex5,
            ],
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
                        src={shoes.Nike.AF1[0]}
                        alt="main-image"
                        className={styles.mainImage}
                    />
                </div>
                <div>
                    <div>
                        <h3>Air Force 1</h3>
                    </div>
                    <div>Nike</div>
                    <div>P500</div>
                    <div>Men, Female, Kids</div>
                    <div>Select Size</div>
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
