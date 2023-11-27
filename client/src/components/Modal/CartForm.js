import { forwardRef, useState } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import styles from "./CartForm.module.css";
import CartFormDetails from "./components/CartFormDetails";
import { UploadAttachmentContent } from "./UploadAttachment";
import ModeOfPayment from "./ModeOfPayment";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CartForm = ({ isOpen, onClose }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [cartFormDetails, setCartFormDetails] = useState(null);
    const [attachments, setAttachments] = useState([]);

    const handleClose = () => {
        setIsMOPOpen(false);
        setIsClosing(true);
        onClose();
    };

    const constHandleSubmit = () => {
        console.log("buying...", cartFormDetails);
        console.log("...attachments", attachments);
    };

    const handleMOPOpen = (value) => {
        setIsMOPOpen(value);
    };

    const handleAttachmentUpload = (values) => {
        setAttachments(values);
    };

    const handleCartFormDetails = (values) => {
        setCartFormDetails(values);
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"md"}
            fullWidth
        >
            <DialogTitle>Shopping Cart Form</DialogTitle>
            <DialogContent>
                <div className={styles.containerContent}>
                    <div className={styles.details}>
                        <CartFormDetails
                            handleCartFormDetails={handleCartFormDetails}
                        />
                    </div>
                    <div className={styles.uploadAttachments}>
                        <UploadAttachmentContent
                            handleMOPOpen={handleMOPOpen}
                            isClosing={isClosing}
                            handleAttachmentUpload={handleAttachmentUpload}
                        />
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
                    onClick={constHandleSubmit}
                    className={styles.button}
                >
                    Buy
                </Button>
            </DialogActions>
            {isMOPOpen && (
                <ModeOfPayment
                    isOpen={isMOPOpen}
                    onClose={() => setIsMOPOpen(false)}
                />
            )}
        </Dialog>
    );
};

export default CartForm;
