import { forwardRef, useState, useRef } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./CartForm.module.css";
import CartFormDetails from "./components/CartFormDetails";
import { UploadAttachmentContent } from "./UploadAttachment";
import ModeOfPayment from "./ModeOfPayment";
import CustomerDetailsSchema from "../Common/yup/CustomerDetailsSchema";
import FullPageLoader from "../Common/FullPageLoader";
import client from "../Common/ApiClient";
import Success from "./Success";
import ErrorModal from "./ErrorModal";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CartForm = ({ isOpen, onClose, cartItems, onCloseCart }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [attachments, setAttachments] = useState([]);
    const [isLoading, setIsLoading] = useState({
        enabled: false,
        message: "Please wait while we load the contents...",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const retryRef = useRef(null);

    const handleClose = () => {
        setIsMOPOpen(false);
        setIsClosing(true);
        onClose();
    };

    const handleMOPOpen = (value) => {
        setIsMOPOpen(value);
    };

    const handleAttachmentUpload = (values) => {
        setAttachments(values);
    };

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isDirty },
        trigger,
    } = useForm({
        resolver: yupResolver(CustomerDetailsSchema),
    });

    const callConfirmOrder = async (formData) => {
        setIsSuccess(false);
        setIsError(false);
        setIsLoading({
            enabled: true,
            message: "Please wait while we process your order...",
        });
        await client
            .post("/order/send-order", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((data) => {
                console.log(data);
                setIsSuccess(true);
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
            })
            .finally(() =>
                setIsLoading({
                    enabled: false,
                    message: "Please wait while we load the contents...",
                })
            );
    };

    const callSubmitApi = (values) => {
        const formData = new FormData();
        attachments.forEach((item) => {
            formData.append("attachments", item.file);
        });
        cartItems.forEach((item) => {
            formData.append("shoes", JSON.stringify(item));
        });
        formData.append("formValues", JSON.stringify(values));
        callConfirmOrder(formData);
    };

    const submitForm = async () => {
        retryRef.current = submitForm;
        await handleSubmit((values) => callSubmitApi(values))();
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"md"}
            fullWidth
        >
            {isLoading.enabled && (
                <FullPageLoader
                    open={isLoading.enabled}
                    message={isLoading.message}
                />
            )}
            <DialogTitle>Shopping Cart Form</DialogTitle>
            <DialogContent>
                <div className={styles.containerContent}>
                    <div className={styles.details}>
                        <CartFormDetails control={control} trigger={trigger} />
                    </div>
                    <div className={styles.uploadAttachments}>
                        <UploadAttachmentContent
                            handleMOPOpen={handleMOPOpen}
                            isClosing={isClosing}
                            handleAttachmentUpload={handleAttachmentUpload}
                        />
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}
                    className={styles.button}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    className={styles.button}
                    disabled={attachments.length === 0 || !isValid}
                >
                    Checkout
                </Button>
            </DialogActions>
            {isMOPOpen && (
                <ModeOfPayment
                    isOpen={isMOPOpen}
                    onClose={() => setIsMOPOpen(false)}
                />
            )}
            {isSuccess && (
                <Success
                    isOpen={isSuccess}
                    title={"Checkout Successful!"}
                    message={"We will contact you very soon."}
                    onClose={() => {
                        setIsSuccess(false);
                        handleClose();
                        onCloseCart();
                    }}
                />
            )}
            {isError && (
                <ErrorModal
                    isOpen={isError}
                    title={"Something went wrong!"}
                    message={"Please contact administration."}
                    onClose={() => {
                        setIsError(false);
                    }}
                    onRetry={() => retryRef.current()}
                />
            )}
        </Dialog>
    );
};

export default CartForm;
