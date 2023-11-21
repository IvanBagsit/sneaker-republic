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
import styles from "./UploadAttachment.module.css";
import ModeOfPayment from "./ModeOfPayment";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UploadAttachment = ({ isOpen = false, onClose, details }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);

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
            <DialogTitle>Upload Attachment</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Mode of Payment:{" "}
                    <Button
                        size="small"
                        onClick={() => setIsMOPOpen(true)}
                        variant="outlined"
                    >
                        View
                    </Button>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant="outlined"
                    className={styles.buttons}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleClose}
                    variant="contained"
                    className={styles.buttons}
                    color="primary"
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

export default UploadAttachment;
