import { forwardRef, useState } from "react";
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

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CartForm = ({ isOpen, onClose, cartItems }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [attachments, setAttachments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    const callConfirmOrder = async (orderDetails) => {
        setIsLoading(true);
        await client
            .post("/order/send-order", { orderDetails })
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    };

    const callSubmitApi = (values) => {
        const orderDetails = {
            shoes: cartItems,
            formValues: values,
            attachments: attachments,
        };
        callConfirmOrder(orderDetails);
    };

    const submitForm = async () => {
        await handleSubmit((values) => callSubmitApi(values))();
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"md"}
            fullWidth
        >
            {isLoading && <FullPageLoader open={isLoading} />}
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
                    Buy
                </Button>
            </DialogActions>
            {isMOPOpen && (
                <ModeOfPayment
                    isOpen={isMOPOpen}
                    onClose={() => setIsMOPOpen(false)}
                />
            )}
        </Dialog>
    );
};

export default CartForm;
