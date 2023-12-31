import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import styles from "./SneakerList.module.css";
import client from "../../Common/ApiClient";
import FullPageLoader from "../../Common/FullPageLoader";
import BufferToURI from "../../Common/BufferToURI";
import Confirmation from "../../Modal/Confirmation";

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
    const [form, setForm] = useState({
        name: title,
        brand: brand,
        price: price,
        menSizes: sizes[0].sizes.join(", "),
        womenSizes: sizes[1].sizes.join(", "),
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [confirmation, setConfirmation] = useState({
        enabled: false,
        title: "",
    });

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (form.name.trim() === "") {
            newErrors.name = "Name Required";
        }

        if (form.brand.trim() === "") {
            newErrors.brand = "Brand is required";
        }

        if (form.price === null || form.price === undefined) {
            newErrors.price = "Price is required";
        } else if (form.price < 0) {
            newErrors.price = "Price should be positive number";
        } else if (isNaN(form.price)) {
            newErrors.price = "Price should be a valid number";
        }

        if (!form.menSizes) {
            newErrors.menSizes = "Men sizes is required";
        }

        if (!form.womenSizes) {
            newErrors.womenSizes = "Women sizes is required";
        }

        setErrors(newErrors);
    };

    const sizeValidation = (sizes) => {
        const sizeArray = [];
        if (sizes) {
            const tempArray = sizes.split(",");
            tempArray.forEach((item) => {
                const trimmedItem = item.trim();
                if (!isNaN(trimmedItem) && trimmedItem >= 0 && trimmedItem) {
                    const size = parseFloat(item).toFixed(1);
                    sizeArray.push(size);
                }
            });
            sizeArray.sort((a, b) => a - b);
        }
        return sizeArray;
    };

    const handleUpdateSneaker = async () => {
        if (isUpdate) {
            setIsSubmitting(true);
        } else {
            setIsUpdate((prev) => !prev);
        }
    };

    const callUpdateSneaker = async () => {
        if (isSubmitting) {
            setIsLoading({
                enabled: true,
                message: "Please wait while we update sneaker...",
            });
            hasLoaded(false);
            const body = {
                ...form,
                menSizes: sizeValidation(form.menSizes),
                womenSizes: sizeValidation(form.womenSizes),
            };
            await client
                .put(`db/update-sneaker/${id}`, body)
                .then(() => {
                    isSuccess((prev) => {
                        return {
                            ...prev,
                            enabled: true,
                            message: "Update of sneaker complete!",
                        };
                    });
                    setIsUpdate((prev) => !prev);
                })
                .catch((error) => {
                    console.error(error);
                    retryRef.current = callUpdateSneaker;
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
                    setIsSubmitting(false);
                });
        }
    };

    useEffect(() => {
        callUpdateSneaker();
    }, [isSubmitting]);

    useEffect(() => {
        validateForm();
    }, [form]);

    const handleDeleteSneaker = async () => {
        if (isUpdate) {
            setForm({
                name: title,
                brand: brand,
                price: price,
                menSizes: sizes[0].sizes.join(", "),
                womenSizes: sizes[1].sizes.join(", "),
            });
            setIsUpdate((prev) => !prev);
        } else {
            console.log("ELSE");
            setConfirmation({
                enabled: true,
                title: `Are you sure you want to delete ${title}?`,
            });
        }
    };

    const callDeleteSneakerApi = async () => {
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
                retryRef.current = callDeleteSneakerApi;
                isError((prev) => {
                    return {
                        ...prev,
                        enabled: true,
                    };
                });
            })
            .finally(() => {
                setConfirmation((prev) => {
                    return {
                        ...prev,
                        enabled: false,
                    };
                });
                setIsLoading((prev) => {
                    return { ...prev, enabled: false };
                });
                hasLoaded(true);
            });
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
                                value={form.name}
                                onChange={(e) => handleFieldChange(e)}
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
                                value={form.brand}
                                onChange={handleFieldChange}
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
                                value={form.price}
                                onChange={handleFieldChange}
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
                                value={form.menSizes}
                                onChange={handleFieldChange}
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
                                value={form.womenSizes}
                                onChange={handleFieldChange}
                                type="text"
                            ></input>
                        </span>
                    ) : (
                        sizes[1].sizes.join(", ")
                    )}
                </div>
                <div className={styles.images}>
                    {shoes?.map((item) => {
                        return (
                            <div key={item.code}>
                                <img
                                    src={BufferToURI(
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
                    variant="outlined"
                    color="error"
                    className={styles.buttons}
                    style={{ backgroundColor: "white" }}
                    onClick={handleDeleteSneaker}
                >
                    {isUpdate ? "Cancel" : "Delete"}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={styles.buttons}
                    onClick={handleUpdateSneaker}
                    disabled={Object.keys(errors).length > 0}
                >
                    {isUpdate ? "Done" : "Update"}
                </Button>
            </div>
            {confirmation.enabled && (
                <Confirmation
                    isOpen={confirmation.enabled}
                    title={confirmation.title}
                    onConfirm={() => callDeleteSneakerApi()}
                    onClose={() =>
                        setConfirmation((prev) => {
                            return {
                                ...prev,
                                enabled: false,
                            };
                        })
                    }
                />
            )}
        </div>
    );
};

export default SneakerList;
