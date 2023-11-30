import {
    AF1Unisex1,
    Airmax97Women,
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
    ListSubheader,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import styles from "./ViewAll.module.css";
import { Link } from "react-router-dom";
import DeviceChecker from "../Common/DeviceChecker";

const ViewAll = () => {
    const itemData = [
        {
            img: AF1Unisex1,
            name: "Nike Airforce 1",
            inventory: "Price: P800",
            link: "airforce1",
        },
        {
            img: Airmax97Women,
            name: "Nike Airmax 97",
            inventory: "Price: P600",
            link: "airmax97",
        },
        {
            img: FragmentUnisex1,
            name: "Nike Travis Scott x Fragment",
            inventory: "Price: P700",
            link: "fragment",
        },
        {
            img: GiannisMen,
            name: "Nike Giannis",
            inventory: "Price: P800",
            link: "giannis",
        },
        {
            img: J1Unisex2,
            name: "Nike Jordan 1",
            inventory: "Price: P600",
            link: "jordan1",
        },
        {
            img: J3Men4,
            name: "Nike Jordan 3",
            inventory: "Price: P700",
            link: "jordan3",
        },
        {
            img: JoyrideUnisex3,
            name: "Nike Joyride",
            inventory: "Price: P700",
            link: "joyride",
        },
        {
            img: AlphabounceUnisex1,
            name: "Adidas Alphabounce",
            inventory: "Price: P500",
            link: "alphabounce",
        },
        {
            img: StansmithUnisex1,
            name: "Adidas Stansmith",
            inventory: "Price: P500",
            link: "stansmith",
        },
        {
            img: UltraboostUnisex1,
            name: "Adidas Ultraboost",
            inventory: "Price: P800",
            link: "ultraboost",
        },
        {
            img: YeezyUnisex1,
            name: "Adidas Yeezy",
            inventory: "Price: P700",
            link: "yeezy",
        },
    ];

    const device = DeviceChecker();

    const imageListDimension = () => {
        if (device === "desktop") {
            return {
                width: "770px",
                height: "90vh",
            };
        } else {
            return {
                width: "90vw",
                height: "70vh",
            };
        }
    };

    const imageDimension = () => {
        if (device === "desktop") {
            return {
                width: "248px",
                height: "248px",
            };
        } else {
            return {
                width: "44vw",
                height: "44vw",
            };
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <ImageList sx={imageListDimension()}>
                    <ImageListItem
                        key="Subheader"
                        cols={`${device === "desktop" ? 3 : 2}`}
                    >
                        {device !== "desktop" && (
                            <ListSubheader
                                component="div"
                                style={{
                                    backgroundColor: "#E8E8E8",
                                    color: "#000000",
                                }}
                            >
                                List of available sneakers
                            </ListSubheader>
                        )}
                    </ImageListItem>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                alt={item.title}
                                style={imageDimension()}
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
