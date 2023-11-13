import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import styles from "./ViewAll.module.css";

import AF1 from "../../images/shoes/Nike/AF1/Unisex 1.JPG";
import Airmax97 from "../../images/shoes/Nike/Airmax 97/Unisex.JPG";
import Fragment from "../../images/shoes/Nike/Fragment/Unisex 1.JPG";
import Giannis from "../../images/shoes/Nike/Giannis/Men size.JPG";
import J1 from "../../images/shoes/Nike/J1/Unisex 2.JPG";
import J3 from "../../images/shoes/Nike/J3/Men size.JPG";
import Joyride from "../../images/shoes/Nike/Joyride/Unisex 3.JPG";
import Alphabounce from "../../images/shoes/Adidas/Alphabounce/Unisex 1.JPG";
import Stansmith from "../../images/shoes/Adidas/Stansmith/Unisex 1.JPG";
import Ultraboost from "../../images/shoes/Adidas/Ultraboost/Unisex 1.JPG";
import Yeezy from "../../images/shoes/Adidas/Yeezy/Unisex 1.JPG";
import { Link } from "react-router-dom";

const ViewAll = () => {
    const itemData = [
        {
            img: AF1,
            name: "Nike Airforce 1",
            inventory: "Inventory: 3",
            link: "airforce1",
        },
        {
            img: Airmax97,
            name: "Nike Airmax 97",
            inventory: "Inventory: 5",
            link: "airforce1",
        },
        {
            img: Fragment,
            name: "Nike Travis Scott x Fragment",
            inventory: "Inventory: 4",
            link: "airforce1",
        },
        {
            img: Giannis,
            name: "Nike Giannis",
            inventory: "Inventory: 4",
            link: "airforce1",
        },
        {
            img: J1,
            name: "Nike Jordan 1",
            inventory: "Inventory: 2",
            link: "airforce1",
        },
        {
            img: J3,
            name: "Nike Jordan 3",
            inventory: "Inventory: 1",
            link: "airforce1",
        },
        {
            img: Joyride,
            name: "Nike Joyride",
            inventory: "Inventory: 5",
            link: "airforce1",
        },
        {
            img: Alphabounce,
            name: "Adidas Alphabounce",
            inventory: "Inventory: 4",
            link: "airforce1",
        },
        {
            img: Stansmith,
            name: "Adidas Stan Smith",
            inventory: "Inventory: 1",
            link: "airforce1",
        },
        {
            img: Ultraboost,
            name: "Adidas Ultraboost",
            inventory: "Inventory: 2",
            link: "airforce1",
        },
        {
            img: Yeezy,
            name: "Adidas Yeezy",
            inventory: "Inventory: 3",
            link: "airforce1",
        },
    ];

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <ImageList sx={{ width: "770px", height: "90vh" }}>
                    <ImageListItem key="Subheader" cols={3}></ImageListItem>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                alt={item.title}
                                style={{ height: "248px", width: "248px" }}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.name}
                                subtitle={item.inventory}
                                actionIcon={
                                    <Link to={`view?shoes=${item.link}`}>
                                        <IconButton
                                            sx={{
                                                color: "rgba(255, 255, 255, 0.54)",
                                            }}
                                            aria-label={`info about ${item.name}`}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    </Link>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
};

export default ViewAll;
