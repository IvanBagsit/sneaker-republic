import { useDispatch } from "react-redux";
import { DialogContentText, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

import {
    updateCartShoesQuantity,
    deleteCartShoes,
} from "../../Common/redux/redux";

import styles from "./CartItem.module.css";
import BufferToURI from "../../Common/BufferToURI";

const CartItem = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useDispatch();

    const handleQuantityOperation = (isAdding) => {
        if (isAdding) {
            dispatch(
                updateCartShoesQuantity({
                    code: item.mainImage.code,
                    index: index,
                    quantity: item.quantity + 1,
                })
            );
        } else {
            if (item.quantity > 1) {
                dispatch(
                    updateCartShoesQuantity({
                        code: item.mainImage.code,
                        index: index,
                        quantity: item.quantity - 1,
                    })
                );
            }
        }
    };

    const handleRemoveItem = () => {
        dispatch(deleteCartShoes({ index: index, code: item.mainImage.code }));
    };

    return (
        <div key={item.mainImage.code} className={styles.contentContainer}>
            <div
                style={{ position: "relative" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={BufferToURI(
                        item.mainImage.content.data,
                        item.mainImage.type
                    )}
                    alt="mainImage"
                    className={styles.image}
                    style={{
                        filter: `${isHovered ? "brightness(50%)" : ""}`,
                    }}
                />
                {isHovered && (
                    <IconButton
                        style={{ position: "absolute", top: 0, left: 0 }}
                        sx={{ color: "red" }}
                        size="large"
                        onClick={handleRemoveItem}
                    >
                        <DeleteIcon fontSize="30px" />
                    </IconButton>
                )}
            </div>
            <div className={styles.cartItemDetails}>
                <DialogContentText>
                    Code: {item.mainImage.code}
                </DialogContentText>
                <DialogContentText>
                    Size(US): {item.sizes.sizes} {item.sizes.availability}
                </DialogContentText>
                <DialogContentText>Price: P{item.price}</DialogContentText>
                <DialogContentText>
                    Quantity:
                    <IconButton
                        onClick={() => {
                            handleQuantityOperation(false);
                        }}
                        color="primary"
                    >
                        <RemoveCircleIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton
                        onClick={() => {
                            handleQuantityOperation(true);
                        }}
                        color="primary"
                    >
                        <AddCircleIcon />
                    </IconButton>
                    <DialogContentText>
                        Total: P{item.totalPrice}
                    </DialogContentText>
                </DialogContentText>
            </div>
        </div>
    );
};

export default CartItem;
