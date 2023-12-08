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
import styles from "./Login.module.css";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = ({ isOpen, onClose }) => {
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"xs"}
            fullWidth
        >
            <DialogTitle>Admin Login</DialogTitle>
            <DialogContent>Hi Admin</DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    className={styles.button}
                    onClick={onClose}
                >
                    Close
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    type="submit"
                >
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Login;
