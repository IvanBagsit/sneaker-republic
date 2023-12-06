import { Button, ButtonGroup } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./View.module.css";
import BuyNow from "../Modal/BuyNow";
import ModeOfPayment from "../Modal/ModeOfPayment";
import { addCartShoes } from "../Common/redux/redux";
import DeviceChecker from "../Common/DeviceChecker";
import client from "../Common/ApiClient";
import FullPageLoader from "../Common/FullPageLoader";

const View = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const viewableShoes = queryParams.get("shoes");

    const [isLoading, setIsLoading] = useState(false);
    const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);
    const [isMOPOpen, setIsMOPOpen] = useState(false);
    const [viewedShoes, setViewedShoes] = useState({
        url: "",
        mainImage: {
            image: null,
            code: "",
        },
        shoes: [],
        title: "",
        brand: "",
        price: 0,
        sizes: [
            {
                availability: "",
                sizes: [],
            },
            {
                availability: "",
                sizes: [],
            },
        ],
    });
    const [size, setSize] = useState({
        availability: "",
        sizes: null,
    });

    const callViewedShoesAPI = async () => {
        setIsLoading(true);
        await client
            .get(`/view?shoes=${viewableShoes}`)
            .then((item) => {
                const { data } = item;
                if (data) {
                    setViewedShoes(data);
                }
            })
            .catch((error) => {
                console.error(error);
                setViewedShoes({
                    code: error.response.status,
                    message: error.response.data.message,
                });
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        callViewedShoesAPI();
    }, []);

    const viewSubShoes = (code) => {
        const tempViewedShoes = viewedShoes.shoes.find(
            (item) => item.code === code
        );
        setViewedShoes((prev) => {
            return {
                ...prev,
                mainImage: {
                    code: tempViewedShoes.code,
                    image: tempViewedShoes.image,
                },
            };
        });
    };

    const handleSizeSelection = (availability, sizes) => {
        const sizeObject = {
            availability,
            sizes,
        };
        setSize(sizeObject);
    };

    const handleSizeButton = (availability, sizes) => {
        return size.availability === availability && size.sizes === sizes;
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addCartShoes({
                ...viewedShoes,
                sizes: size,
                quantity: 1,
                totalPrice: viewedShoes.price,
                shoes: null,
            })
        );
    };

    const device = DeviceChecker();

    const buyNowButtonStyle = () => {
        if (device === "desktop") {
            return {
                width: "40%",
                marginRight: "1%",
            };
        } else {
            return {
                width: "45%",
                marginRight: "2%",
            };
        }
    };

    const addToCartButtonStyle = () => {
        if (device === "desktop") {
            return {
                width: "40%",
                marginRight: "1%",
            };
        } else {
            return {
                width: "45%",
            };
        }
    };

    return (
        <div className={styles.background}>
            {isLoading && (
                <FullPageLoader
                    open={isLoading}
                    message={"Please wait while we load the contents..."}
                />
            )}
            <div className={styles.content}>
                {viewedShoes.url && (
                    <div className={styles.contentDetails}>
                        <img
                            src={viewedShoes.mainImage.image}
                            alt="viewedshoes"
                            className={styles.mainImage}
                        />
                    </div>
                )}
                {viewedShoes.url && (
                    <div className={styles.contentDetails}>
                        <div className={styles.details}>
                            <h1>{viewedShoes.title}</h1>
                        </div>
                        <div className={styles.details}>
                            Brand: {viewedShoes.brand}
                        </div>
                        <div className={styles.details}>
                            Code: {viewedShoes.mainImage.code}
                        </div>
                        <div className={styles.details}>
                            Price: P{viewedShoes.price}
                        </div>
                        <div className={styles.details}>
                            <div>
                                Men size (US):{" "}
                                <ButtonGroup
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                >
                                    {viewedShoes.sizes[0].sizes.map((items) => {
                                        return (
                                            <Button
                                                key={items}
                                                onClick={() =>
                                                    handleSizeSelection(
                                                        "Men",
                                                        items
                                                    )
                                                }
                                                variant={
                                                    handleSizeButton(
                                                        "Men",
                                                        items
                                                    )
                                                        ? "contained"
                                                        : "outlined"
                                                }
                                            >
                                                {items}
                                            </Button>
                                        );
                                    })}
                                </ButtonGroup>
                            </div>
                            <div>
                                Women size (US):{" "}
                                <ButtonGroup
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                >
                                    {viewedShoes.sizes[1].sizes.map((items) => {
                                        return (
                                            <Button
                                                key={items}
                                                onClick={() =>
                                                    handleSizeSelection(
                                                        "Women",
                                                        items
                                                    )
                                                }
                                                variant={
                                                    handleSizeButton(
                                                        "Women",
                                                        items
                                                    )
                                                        ? "contained"
                                                        : "outlined"
                                                }
                                            >
                                                {items}
                                            </Button>
                                        );
                                    })}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={buyNowButtonStyle()}
                                onClick={() => {
                                    setIsBuyNowOpen(true);
                                }}
                                disabled={size.sizes === null}
                            >
                                Buy Now
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<ShoppingCartIcon />}
                                sx={addToCartButtonStyle()}
                                onClick={handleAddToCart}
                                disabled={size.sizes === null}
                            >
                                Add to Cart
                            </Button>
                        </div>
                        <div className={styles.details}>
                            <div>
                                Shipping Fee:{" "}
                                <b style={{ color: "#1976d1" }}>FREE</b>
                            </div>
                            <div>Mode of Delivery: LBC</div>
                        </div>
                        <div>
                            {viewedShoes.shoes.map((shoes) => {
                                return (
                                    <span
                                        onClick={() => viewSubShoes(shoes.code)}
                                        className={styles.subShoes}
                                        key={shoes.code}
                                    >
                                        <img
                                            src={shoes.image}
                                            alt={shoes.code}
                                            className={styles.subShoesImage}
                                        />
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                )}
                {viewedShoes.code && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ fontSize: "8vh" }}>
                            <b>{viewedShoes.code}</b>
                        </div>
                        <div>{viewedShoes.message}</div>
                    </div>
                )}
            </div>
            {isBuyNowOpen && (
                <BuyNow
                    isOpen={isBuyNowOpen}
                    onClose={() => {
                        setIsBuyNowOpen(false);
                    }}
                    shoes={viewedShoes}
                    size={size}
                />
            )}
            {isMOPOpen && (
                <ModeOfPayment
                    isOpen={isMOPOpen}
                    onClose={() => setIsMOPOpen(false)}
                />
            )}
        </div>
    );
};

export default View;
