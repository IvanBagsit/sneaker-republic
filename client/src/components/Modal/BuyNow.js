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
} from "@mui/material";
import styles from "./BuyNow.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BuyNow = ({ isOpen, onClose, shoes }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(quantity * shoes.price);
    }, [quantity]);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            onClose={handleClose}
            maxWidth={"sm"}
            fullWidth
        >
            <DialogTitle>{`Buy ${shoes.brand} ${shoes.title}?`}</DialogTitle>
            <DialogContent>
                <div className={styles.contentContainer}>
                    <div>
                        <img
                            src={shoes.mainImage.image}
                            alt="mainImage"
                            className={styles.image}
                        />
                    </div>
                    <div style={{ marginLeft: "2%" }}>
                        <DialogContentText>
                            Code: {shoes.mainImage.code}
                        </DialogContentText>
                        <DialogContentText>
                            Price: P{shoes.price}
                        </DialogContentText>
                        <DialogContentText>
                            {" "}
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
                            >
                                <RemoveCircleIcon />
                            </IconButton>
                            {quantity}
                            <IconButton
                                onClick={() => {
                                    setQuantity((prev) => prev + 1);
                                }}
                            >
                                <AddCircleIcon />
                            </IconButton>
                        </DialogContentText>
                        <DialogContentText>
                            Total Price: P{totalPrice}
                        </DialogContentText>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}
                    sx={{ width: "20%" }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    sx={{ width: "20%" }}
                >
                    Buy
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default BuyNow;
