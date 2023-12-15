import { useState } from "react";
import { Button } from "@mui/material";

import styles from "./SneakerList.module.css";
import client from "../../Common/ApiClient";
import FullPageLoader from "../../Common/FullPageLoader";

const SneakerList = ({
    id,
    title,
    brand,
    price,
    sizes,
    mainImage,
    shoes,
    hasLoaded,
    isSuccess,
    isError,
    retryRef,
}) => {
    const [isLoading, setIsLoading] = useState({
        enabled: false,
        message: "Please wait while we delete sneaker...",
    });
    const [isUpdate, setIsUpdate] = useState(false);

    const handleUpdateSneaker = async () => {
        if (isUpdate) {
            console.log("call api");
            // submit sneaker api call
        } else {
            setIsUpdate((prev) => !prev);
        }
    };

    const handleDeleteSneaker = async () => {
        if (isUpdate) {
            setIsUpdate((prev) => !prev);
        } else {
            setIsLoading((prev) => {
                return { ...prev, enabled: true };
            });
            hasLoaded(false);
            await client
                .delete(`db/delete-sneaker/${id}`)
                .then(() => {
                    isSuccess((prev) => {
                        return {
                            ...prev,
                            enabled: true,
                            message: "Deletion of sneaker complete!",
                        };
                    });
                })
                .catch((error) => {
                    console.error(error);
                    retryRef.current = handleDeleteSneaker;
                    isError((prev) => {
                        return {
                            ...prev,
                            enabled: true,
                        };
                    });
                })
                .finally(() => {
                    setIsLoading((prev) => {
                        return { ...prev, enabled: false };
                    });
                    hasLoaded(true);
                });
        }
    };

    const bufferToURI = (values, fileType) => {
        const buffer = new Uint8Array(values);
        const blob = new Blob([buffer], { type: fileType });
        const dataURI = URL.createObjectURL(blob);
        return dataURI;
    };

    return (
        <div className={styles.content}>
            {isLoading.enabled && (
                <FullPageLoader
                    open={isLoading.enabled}
                    message={isLoading.message}
                />
            )}
            <div className={styles.details}>
                <div>
                    Name:{" "}
                    {isUpdate ? (
                        <span>
                            <input
                                name="name"
                                defaultValue={title}
                                type="text"
                            ></input>
                        </span>
                    ) : (
                        title
                    )}{" "}
                    - Brand:{" "}
                    {isUpdate ? (
                        <span>
                            <input
                                name="brand"
                                defaultValue={brand}
                                type="text"
                            ></input>
                        </span>
                    ) : (
                        brand
                    )}{" "}
                    - Price: P
                    {isUpdate ? (
                        <span>
                            <input
                                name="price"
                                defaultValue={price.toFixed(2)}
                                type="text"
                            ></input>
                        </span>
                    ) : (
                        price.toFixed(2)
                    )}
                </div>
                <div>
                    Men size (US):{" "}
                    {isUpdate ? (
                        <span>
                            <input
                                name="menSizes"
                                defaultValue={sizes[0].sizes.join(", ")}
                                type="text"
                            ></input>
                        </span>
                    ) : (
                        sizes[0].sizes.join(", ")
                    )}
                </div>
                <div>
                    Women size (US):{" "}
                    {isUpdate ? (
                        <span>
                            <input
                                name="womenSizes"
                                defaultValue={sizes[1].sizes.join(", ")}
                                type="text"
                            ></input>
                        </span>
                    ) : (
                        sizes[1].sizes.join(", ")
                    )}
                </div>
                <div className={styles.images}>
                    <div>
                        <img
                            src={bufferToURI(
                                mainImage.content.data,
                                mainImage.type
                            )}
                            alt={mainImage.code}
                            className={styles.image}
                        />
                    </div>
                    {shoes.map((item) => {
                        return (
                            <div key={item.code}>
                                <img
                                    src={bufferToURI(
                                        item.content.data,
                                        item.type
                                    )}
                                    alt={item.code}
                                    className={styles.image}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    variant="contained"
                    color="secondary"
                    className={styles.buttons}
                    onClick={handleUpdateSneaker}
                >
                    {isUpdate ? "Done" : "Update"}
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    className={styles.buttons}
                    style={{ backgroundColor: "white" }}
                    onClick={handleDeleteSneaker}
                >
                    {isUpdate ? "Cancel" : "Delete"}
                </Button>
            </div>
        </div>
    );
};

export default SneakerList;
