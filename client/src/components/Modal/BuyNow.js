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
            <DialogContent></DialogContent>
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
