import { forwardRef } from "react";
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

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UploadAttachment = ({ isOpen = false, onClose, details }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
            <DialogTitle>Upload Attachment</DialogTitle>
            <DialogContent>
                <DialogContentText>HELLO</DialogContentText>
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
        </Dialog>
    );
};

export default UploadAttachment;
