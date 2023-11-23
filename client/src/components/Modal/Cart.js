import { forwardRef, useEffect, useState } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogActions,
    IconButton,
    TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Cart.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = ({ isOpen, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const cartItems = useSelector((state) => state.cartSlice.shoes);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"md"}
            fullWidth
        >
            <DialogTitle>Shopping Cart</DialogTitle>
            <DialogContent>
                <div>
                    {cartItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.contentContainer}
                            >
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
                                        Size(US): {item.sizes.sizes}{" "}
                                        {item.sizes.availability}
                                    </DialogContentText>
                                    <DialogContentText>
                                        Price: P{item.price}
                                    </DialogContentText>
                                    <DialogContentText>
                                        Quantity:
                                        <IconButton
                                            onClick={() => {
                                                setQuantity((prev) => {
                                                    if (prev <= 1) {
                                                        return prev;
                                                    } else {
                                                        return prev - 1;
                                                    }
                                                });
                                            }}
                                            color="primary"
                                        >
                                            <RemoveCircleIcon />
                                        </IconButton>
                                        {quantity}
                                        <IconButton
                                            onClick={() => {
                                                setQuantity((prev) => prev + 1);
                                            }}
                                            color="primary"
                                        >
                                            <AddCircleIcon />
                                        </IconButton>
                                    </DialogContentText>
                                    <DialogContentText>
                                        <b>Total Price:</b> P{totalPrice}
                                    </DialogContentText>
                                    <div>
                                        <TextField
                                            label={"Full Name"}
                                            variant="standard"
                                            className={styles.textField}
                                            style={{ marginTop: "5%" }}
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label={"Email"}
                                            variant="standard"
                                            className={styles.textField}
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label={"Contact Number"}
                                            variant="standard"
                                            className={styles.textField}
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label={"LBC Pickup Branch Address"}
                                            variant="standard"
                                            className={styles.textField}
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}
                    className={styles.button}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    className={styles.button}
                >
                    Next
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Cart;
