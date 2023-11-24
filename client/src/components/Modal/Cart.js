import { forwardRef, useState } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import { useSelector } from "react-redux";

import styles from "./Cart.module.css";
import CartItem from "./components/CartItem";
import CartForm from "./CartForm";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = ({ isOpen, onClose }) => {
    const [isCartFormOpen, setIsCartFormOpen] = useState(false);

    const cartItems = useSelector((state) => state.cartSlice.shoes);

    const handleClose = () => {
        onClose();
    };

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
                    onClick={() => setIsCartFormOpen(true)}
                    className={styles.button}
                >
                    Next
                </Button>
            </DialogActions>
            {isCartFormOpen && (
                <CartForm
                    isOpen={isCartFormOpen}
                    onClose={() => setIsCartFormOpen(false)}
                />
            )}
        </Dialog>
    );
};

export default Cart;
