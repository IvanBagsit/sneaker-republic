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
import loginImage from "../../images/others/login.png";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = ({ isOpen, onClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
            <DialogContent className={styles.background}>
                <div className={styles.imageContainer}>
                    <img
                        src={loginImage}
                        alt="loginImage"
                        className={styles.image}
                    />
                </div>
                <div className={styles.loginContainer}>
                    <div>
                        <div className={styles.title}>Hello Admin!</div>
                        <div className={styles.subTitle}>
                            Welcome back, we missed you!
                        </div>
                        <TextField
                            label={"Username"}
                            variant="outlined"
                            size="small"
                            fullWidth
                            style={{ margin: "3% 0 3% 0" }}
                        />
                        <TextField
                            label={"Password"}
                            variant="outlined"
                            type="password"
                            size="small"
                            fullWidth
                            style={{ marginBottom: "3%" }}
                        />
                        <div className={styles.forgotPassword}>
                            Forgot Password?
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="small"
                        fullWidth
                        className={styles.button}
                    >
                        Login
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Login;
