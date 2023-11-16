import {
    AF1Unisex1,
    Airmax97Unisex2,
    AlphabounceUnisex1,
    FragmentUnisex1,
    GiannisMen,
    J1Unisex2,
    J3Men4,
    JoyrideUnisex3,
    StansmithUnisex1,
    UltraboostUnisex1,
    YeezyUnisex1,
} from "../Common/Shoes";
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import styles from "./ViewAll.module.css";
import { Link } from "react-router-dom";

const ViewAll = () => {
    const itemData = [
        {
            img: AF1Unisex1,
            name: "Nike Airforce 1",
            inventory: "Inventory: 3",
            link: "airforce1",
        },
        {
            img: Airmax97Unisex2,
            name: "Nike Airmax 97",
            inventory: "Inventory: 5",
            link: "airforce1",
        },
        {
            img: FragmentUnisex1,
            name: "Nike Travis Scott x Fragment",
            inventory: "Inventory: 4",
            link: "airforce1",
        },
        {
            img: GiannisMen,
            name: "Nike Giannis",
            inventory: "Inventory: 4",
            link: "airforce1",
        },
        {
            img: J1Unisex2,
            name: "Nike Jordan 1",
            inventory: "Inventory: 2",
            link: "airforce1",
        },
        {
            img: J3Men4,
            name: "Nike Jordan 3",
            inventory: "Inventory: 1",
            link: "airforce1",
        },
        {
            img: JoyrideUnisex3,
            name: "Nike Joyride",
            inventory: "Inventory: 5",
            link: "airforce1",
        },
        {
            img: AlphabounceUnisex1,
            name: "Adidas Alphabounce",
            inventory: "Inventory: 4",
            link: "airforce1",
        },
        {
            img: StansmithUnisex1,
            name: "Adidas Stan Smith",
            inventory: "Inventory: 1",
            link: "airforce1",
        },
        {
            img: UltraboostUnisex1,
            name: "Adidas Ultraboost",
            inventory: "Inventory: 2",
            link: "airforce1",
        },
        {
            img: YeezyUnisex1,
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
                                    <Link to={`/view?shoes=${item.link}`}>
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
