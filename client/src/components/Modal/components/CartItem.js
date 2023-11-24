import { useDispatch } from "react-redux";
import { DialogContentText, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { updateCartShoesQuantity } from "../../Common/redux/redux";

import styles from "./CartItem.module.css";

const CartItem = ({ item, index }) => {
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

    return (
        <div key={item.mainImage.code} className={styles.contentContainer}>
            <div>
                <img
                    src={item.mainImage.image}
                    alt="mainImage"
                    className={styles.image}
                />
            </div>
            <div
                style={{
                    marginLeft: "2%",
                    width: "40%",
                }}
            >
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
