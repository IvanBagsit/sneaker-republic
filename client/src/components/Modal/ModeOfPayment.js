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
import styles from "./ModeOfPayment.module.css";
import mop from "../../images/mop/MOP.gif";

const ModeOfPayment = ({ isOpen = false, onClose }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
            <DialogContent>
                <div className={styles.container}>
                    <img src={mop} alt="mop" className={styles.image} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModeOfPayment;
