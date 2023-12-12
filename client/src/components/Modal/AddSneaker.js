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
import styles from "./AddSneaker.module.css";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddSneaker = ({ isOpen, onClose }) => {
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
            <DialogTitle>Add Sneaker</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    className={styles.button}
                    onClick={() => onClose()}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    type="submit"
                >
                    Next
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddSneaker;
