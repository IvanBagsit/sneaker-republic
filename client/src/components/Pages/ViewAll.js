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
import { useState, useEffect } from "react";
import client from "../Common/ApiClient";

const ViewAll = () => {
    const [itemData, setItemdata] = useState([]);

    const callViewAllShoes = async () => {
        await client
            .get("/view-all/shoes")
            .then((item) => {
                const { data } = item;
                if (data) {
                    setItemdata(data);
                }
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        callViewAllShoes();
    }, []);

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

    const columnNumber = () => {
        return device === "desktop" ? 3 : 2;
    };

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <ImageList sx={imageListDimension()}>
                    <ImageListItem key="Subheader" cols={columnNumber()}>
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
                    {itemData?.map((item) => (
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
