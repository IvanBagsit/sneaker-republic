import { forwardRef, useState } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    TextField,
    Alert,
    Collapse,
} from "@mui/material";
import { useFormik } from "formik";
import styles from "./Login.module.css";
import loginImage from "../../images/others/login.png";
import client from "../Common/ApiClient";
import UserInfoSchema from "../Common/yup/UserInfoSchema";
import FullPageLoader from "../Common/FullPageLoader";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = ({ isOpen, onClose }) => {
    const [alert, setAlert] = useState({
        enabled: false,
        severity: "success",
        message: "Account Recovery email sent to admin email",
    });
    const [isLoading, setIsLoading] = useState({
        enabled: false,
        message: "Please wait while logging in...",
    });

    const callLoginApi = async (details) => {
        setIsLoading({
            enabled: true,
            message: "Please wait while logging in...",
        });
        await client
            .post("/db/login/user", details)
            .then((data) => console.log(data))
            .catch((error) => {
                console.log("ERROR", error);
                if (error.response.status === 401) {
                    formik.errors.password = error.response.data.message;
                } else if (
                    error.response.status === 404 ||
                    error.response.status === 401
                ) {
                    formik.errors.username = error.response.data.message;
                    formik.errors.password = error.response.data.message;
                } else {
                    formik.errors.username = error.message;
                    formik.errors.password = error.message;
                }
            })
            .finally(() =>
                setIsLoading({
                    enabled: false,
                    message: "Please wait while logging in...",
                })
            );
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

    const callForgotPasswordApi = async () => {
        setIsLoading({
            enabled: true,
            message: "Please wait while we send Admin Account via email...",
        });
        await client
            .get("/db/login/forgot-password")
            .then(() => {
                setAlert({
                    enabled: true,
                    severity: "success",
                    message: "Account Recovery email sent to admin email",
                });
            })
            .catch((error) => {
                console.error(error);
                setAlert({
                    enabled: true,
                    severity: "error",
                    message:
                        error.response.data.message ||
                        "Encountered error during account recovery",
                });
            })
            .finally(() =>
                setIsLoading({
                    enabled: false,
                    message: "Please wait while logging in...",
                })
            );
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
            {isLoading.enabled && (
                <FullPageLoader
                    open={isLoading.enabled}
                    message={isLoading.message}
                />
            )}
            <Collapse in={alert.enabled}>
                <Alert
                    variant="filled"
                    onClose={() =>
                        setAlert((prev) => {
                            return {
                                ...prev,
                                enabled: false,
                            };
                        })
                    }
                    severity={alert.severity}
                >
                    {alert.message}
                </Alert>
            </Collapse>
            <DialogContent className={styles.background}>
                <div className={styles.imageContainer}>
                    <img
                        src={loginImage}
                        alt="loginImage"
                        className={styles.image}
                    />
                </div>
                <div className={styles.loginContainer}>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className={styles.title}>Hello Admin!</div>
                            <div className={styles.subTitle}>
                                Welcome back, we miss you!
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
                            <div
                                className={styles.forgotPassword}
                                onClick={() => callForgotPasswordApi()}
                            >
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
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Login;
