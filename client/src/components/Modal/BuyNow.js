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
import styles from "./BuyNow.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import UploadAttachment from "./UploadAttachment";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BuyNow = ({ isOpen, onClose, shoes, size }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const [isUploadAttachmentDisplayed, setIsUploadAttachmentDisplayed] =
        useState(false);

    useEffect(() => {
        setTotalPrice(quantity * shoes.price);
    }, [quantity]);

    const handleClose = () => {
        onClose();
    };

    const handleNext = () => {
        setIsUploadAttachmentDisplayed(true);
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"md"}
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
                    <div
                        style={{
                            marginLeft: "2%",
                            width: "40%",
                        }}
                    >
                        <DialogContentText>
                            Code: {shoes.mainImage.code}
                        </DialogContentText>
                        <DialogContentText>
                            Size: {size.sizes} {size.availability}
                        </DialogContentText>
                        <DialogContentText>
                            Price: P{shoes.price}
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
                    onClick={handleNext}
                    className={styles.button}
                >
                    Next
                </Button>
            </DialogActions>
            {isUploadAttachmentDisplayed && (
                <UploadAttachment
                    isOpen={isUploadAttachmentDisplayed}
                    onClose={() => setIsUploadAttachmentDisplayed(false)}
                />
            )}
        </Dialog>
    );
};

export default BuyNow;
