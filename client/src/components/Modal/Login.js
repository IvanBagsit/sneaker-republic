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
import { useFormik } from "formik";
import styles from "./Login.module.css";
import loginImage from "../../images/others/login.png";
import client from "../Common/ApiClient";
import UserInfoSchema from "../Common/yup/UserInfoSchema";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = ({ isOpen, onClose }) => {
    const callLoginApi = async (details) => {
        await client
            .post("/db/login/user", details)
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };

    const initialValues = {
        username: "",
        password: "",
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: UserInfoSchema,
        validateOnChange: true,
        validateOnMount: true,
        onSubmit: (values) => {
            callLoginApi(values);
        },
    });

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
            <DialogContent className={styles.background}>
                <form onSubmit={formik.handleSubmit}>
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
                                {...formik.getFieldProps("username")}
                                error={
                                    !!formik.errors.username &&
                                    formik.touched.username
                                }
                                helperText={
                                    !!formik.errors.username &&
                                    formik.touched.username
                                        ? formik.errors.username
                                        : ""
                                }
                            />
                            <TextField
                                label={"Password"}
                                variant="outlined"
                                type="password"
                                size="small"
                                fullWidth
                                style={{ marginBottom: "3%" }}
                                {...formik.getFieldProps("password")}
                                error={
                                    !!formik.errors.password &&
                                    formik.touched.password
                                }
                                helperText={
                                    !!formik.errors.password &&
                                    formik.touched.password
                                        ? formik.errors.password
                                        : ""
                                }
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
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default Login;
