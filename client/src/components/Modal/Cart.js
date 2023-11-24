import { forwardRef } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    DialogContentText,
} from "@mui/material";
import { useSelector } from "react-redux";

import styles from "./Cart.module.css";
import CartItem from "./components/CartItem";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = ({ isOpen, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    const cartItems = useSelector((state) => state.cartSlice.shoes);
    const grandTotal = useSelector((state) => state.cartSlice.grandTotal);

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
            <DialogTitle>Shopping Cart</DialogTitle>
            <DialogContent>
                {cartItems.map((item, index) => {
                    return (
                        <CartItem
                            key={item.mainImage.code + index}
                            index={index}
                            item={item}
                        />
                    );
                })}
                <DialogContentText>{grandTotal}</DialogContentText>
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
