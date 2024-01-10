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
import FullPageLoader from "../Common/FullPageLoader";
import BufferToURI from "../Common/BufferToURI";

const ViewAll = () => {
    const [itemData, setItemdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const callViewAllShoes = async () => {
        setIsLoading(true);
        await client
            .get("/view-all/shoes")
            .then((item) => {
                const { data } = item;
                if (data) {
                    setItemdata(data);
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
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
        } else if (device === 'tablet') {
            return {
                width: "45vw",
                height: "45vw",
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
            {isLoading && (
                <FullPageLoader
                    open={true}
                    message={"Please wait while we load the contents..."}
                />
            )}
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
                        <ImageListItem key={item._id}>
                            <img
                                src={BufferToURI(
                                    item.mainImage.content.data,
                                    item.mainImage.type
                                )}
                                alt={item.title}
                                style={imageDimension()}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={`Price: ₱${item.price}`}
                                actionIcon={
                                    <Link to={`/view?shoes=${item.url}`}>
                                        <IconButton
                                            sx={{
                                                color: "rgba(255, 255, 255, 0.54)",
                                            }}
                                            aria-label={`info about ${item.title}`}
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
