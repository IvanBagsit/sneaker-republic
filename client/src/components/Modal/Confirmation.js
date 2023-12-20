import { forwardRef, useState, useRef } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogContentText,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styles from "./Confirmation.module.css";
import DeviceChecker from "../Common/DeviceChecker";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Confirmation = ({ isOpen, onClose, onConfirm, title }) => {
    const device = DeviceChecker();
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"xs"}
            fullWidth
        >
            <DialogContent className={styles.content}>
                <WarningAmberIcon
                    style={{
                        fontSize: `${device === "desktop" ? "5vw" : "8vh"}`,
                    }}
                    color="warning"
                />
                <DialogContentText
                    style={{ marginBottom: "10%", textAlign: "center" }}
                >
                    <b>{title}</b>
                </DialogContentText>
                <div className={styles.buttonGroup}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={onClose}
                        className={styles.button}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onConfirm}
                        className={styles.button}
                    >
                        Confirm
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Confirmation;
