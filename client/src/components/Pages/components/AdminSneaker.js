import { Button } from "@mui/material";
import styles from "./AdminSneaker.module.css";
import Scrollbar from "../../Common/Scrollbar";
import client from "../../Common/ApiClient";
import { useRef, useState } from "react";
import FullPageLoader from "../../Common/FullPageLoader";
import Success from "../../Modal/Success";
import ErrorModal from "../../Modal/ErrorModal";

const AdminSneaker = ({ sneakers, hasLoaded }) => {
    const [isLoading, setIsLoading] = useState({
        enabled: false,
        message: "Please wait while we delete sneaker...",
    });
    const [isSuccess, setIsSuccess] = useState({
        enabled: false,
        title: "Success!",
        message: "",
    });
    const [isError, setIsError] = useState({
        enabled: false,
        title: "Something went wrong!",
        message: "Please contact administration.",
    });
    const [isUpdate, setIsUpdate] = useState(false);

    const retryRef = useRef(null);

    const handleUpdateSneaker = async (id) => {
        if (isUpdate) {
            // api call
        } else {
            setIsUpdate((prev) => !prev);
        }
    };

    const handleDeleteSneaker = async (id) => {
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
                    setIsSuccess((prev) => {
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
                    setIsError((prev) => {
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
        <div className={styles.background}>
            {isLoading.enabled && (
                <FullPageLoader
                    open={isLoading.enabled}
                    message={isLoading.message}
                />
            )}
            <Scrollbar maxHeight={"100%"}>
                {sneakers?.map((item) => {
                    return (
                        <div className={styles.content} key={item._id}>
                            <div className={styles.details}>
                                <div>
                                    Name:{" "}
                                    {isUpdate ? (
                                        <span>
                                            <input
                                                defaultValue={item.title}
                                                type="text"
                                            ></input>
                                        </span>
                                    ) : (
                                        item.title
                                    )}{" "}
                                    - Brand:{" "}
                                    {isUpdate ? (
                                        <span>
                                            <input
                                                defaultValue={item.brand}
                                                type="text"
                                            ></input>
                                        </span>
                                    ) : (
                                        item.brand
                                    )}{" "}
                                    - Price: P
                                    {isUpdate ? (
                                        <span>
                                            <input
                                                defaultValue={item.price.toFixed(
                                                    2
                                                )}
                                                type="number"
                                            ></input>
                                        </span>
                                    ) : (
                                        item.price.toFixed(2)
                                    )}
                                </div>
                                <div>
                                    Men size (US):{" "}
                                    {isUpdate ? (
                                        <span>
                                            <input
                                                defaultValue={item.sizes[0].sizes.join(
                                                    ", "
                                                )}
                                                type="text"
                                            ></input>
                                        </span>
                                    ) : (
                                        item.sizes[0].sizes.join(", ")
                                    )}
                                </div>
                                <div>
                                    Women size (US):{" "}
                                    {isUpdate ? (
                                        <span>
                                            <input
                                                defaultValue={item.sizes[1].sizes.join(
                                                    ", "
                                                )}
                                                type="text"
                                            ></input>
                                        </span>
                                    ) : (
                                        item.sizes[1].sizes.join(", ")
                                    )}
                                </div>
                                <div className={styles.images}>
                                    <div>
                                        <img
                                            src={bufferToURI(
                                                item.mainImage.content.data,
                                                item.mainImage.type
                                            )}
                                            alt={item.mainImage.code}
                                            className={styles.image}
                                        />
                                    </div>
                                    {item.shoes.map((item) => {
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
                                    onClick={() =>
                                        handleUpdateSneaker(item._id)
                                    }
                                >
                                    {isUpdate ? "Done" : "Update"}
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    className={styles.buttons}
                                    style={{ backgroundColor: "white" }}
                                    onClick={() =>
                                        handleDeleteSneaker(item._id)
                                    }
                                >
                                    {isUpdate ? "Cancel" : "Delete"}
                                </Button>
                            </div>
                        </div>
                    );
                })}
                {isSuccess.enabled && (
                    <Success
                        isOpen={isSuccess.enabled}
                        title={isSuccess.title}
                        message={isSuccess.message}
                        onClose={() => {
                            setIsSuccess((prev) => {
                                return {
                                    ...prev,
                                    enabled: false,
                                };
                            });
                        }}
                    />
                )}
                {isError.enabled && (
                    <ErrorModal
                        isOpen={isError.enabled}
                        title={isError.title}
                        message={isError.message}
                        onClose={() => {
                            setIsError((prev) => {
                                return {
                                    ...prev,
                                    enabled: false,
                                };
                            });
                        }}
                        onRetry={() => retryRef.current()}
                    />
                )}
            </Scrollbar>
        </div>
    );
};

export default AdminSneaker;
