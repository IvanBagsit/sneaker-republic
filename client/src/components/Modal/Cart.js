import { forwardRef, useState } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import { useSelector } from "react-redux";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import styles from "./Cart.module.css";
import CartItem from "./components/CartItem";
import CartForm from "./CartForm";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = ({ isOpen, onClose }) => {
    const [isCartFormOpen, setIsCartFormOpen] = useState(false);

    const cartItems = useSelector((state) => state.cartSlice.shoes);
    const numberOfCartItem = useSelector(
        (state) => state.cartSlice.numberOfCartItem
    );

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
                {numberOfCartItem > 0 &&
                    cartItems.map((item, index) => {
                        return (
                            <CartItem
                                key={item.mainImage.code + index}
                                index={index}
                                item={item}
                            />
                        );
                    })}
                {numberOfCartItem < 1 && (
                    <div className={styles.emptyCart}>
                        <DialogContentText>
                            <b>Shopping Cart is empty</b>
                        </DialogContentText>
                        <div style={{ marginTop: "1%" }}>
                            <SentimentVeryDissatisfiedIcon fontSize="large" />
                        </div>
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}
                    className={styles.button}
                >
                    Close
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setIsCartFormOpen(true)}
                    className={styles.button}
                    disabled={numberOfCartItem < 1}
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
