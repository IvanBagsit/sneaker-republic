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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import UploadAttachment from "./UploadAttachment";
import styles from "./BuyNow.module.css";
import CustomerDetailsSchema from "../Common/yup/CustomerDetailsSchema";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BuyNow = ({ isOpen, onClose, shoes, size }) => {
    const initialValues = {
        fullName: "",
        email: "",
        contactNumber: "",
        pickUpBranch: "",
    };

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const [isUploadAttachmentDisplayed, setIsUploadAttachmentDisplayed] =
        useState(false);

    useEffect(() => {
        setTotalPrice(quantity * shoes.price);
    }, [quantity]);

    const handleClose = () => {
        onClose();
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: CustomerDetailsSchema,
        validateOnChange: true,
        validateOnMount: true,
        onSubmit: () => {
            handleNext();
        },
    });

    const shoesToBuy = {
        shoes: [
            {
                ...shoes,
                sizes: {
                    availability: size.availability,
                    sizes: size.sizes,
                },
                shoes: null,
                quantity: quantity,
                totalPrice: totalPrice,
            },
        ],
    };

    const handleNext = () => {
        setIsUploadAttachmentDisplayed(true);
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"md"}
            fullWidth
        >
            <DialogTitle>{`Buy ${shoes.brand} ${shoes.title}?`}</DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <div className={styles.contentContainer}>
                        <div>
                            <img
                                src={shoes.mainImage.image}
                                alt="mainImage"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.contentDetails}>
                            <DialogContentText>
                                Code: {shoes.mainImage.code}
                            </DialogContentText>
                            <DialogContentText>
                                Size(US): {size.sizes} {size.availability}
                            </DialogContentText>
                            <DialogContentText>
                                Price: P{shoes.price}
                            </DialogContentText>
                            <DialogContentText>
                                Quantity:
                                <IconButton
                                    onClick={() => {
                                        setQuantity((prev) => {
                                            if (prev <= 1) {
                                                return prev;
                                            } else {
                                                return prev - 1;
                                            }
                                        });
                                    }}
                                    color="primary"
                                >
                                    <RemoveCircleIcon />
                                </IconButton>
                                {quantity}
                                <IconButton
                                    onClick={() => {
                                        setQuantity((prev) => prev + 1);
                                    }}
                                    color="primary"
                                >
                                    <AddCircleIcon />
                                </IconButton>
                            </DialogContentText>
                            <DialogContentText>
                                <b>Total Price:</b> P{totalPrice}
                            </DialogContentText>
                            <div className="form-control">
                                <TextField
                                    name="fullName"
                                    label={"Full Name"}
                                    variant="standard"
                                    className={styles.textField}
                                    fullWidth
                                    {...formik.getFieldProps("fullName")}
                                    error={
                                        !!formik.errors.fullName &&
                                        formik.touched.fullName
                                    }
                                    helperText={
                                        !!formik.errors.fullName &&
                                        formik.touched.fullName
                                            ? formik.errors.fullName
                                            : ""
                                    }
                                />
                            </div>
                            <div className="form-control">
                                <TextField
                                    name="email"
                                    label={"Email"}
                                    variant="standard"
                                    className={styles.textField}
                                    fullWidth
                                    {...formik.getFieldProps("email")}
                                    error={
                                        !!formik.errors.email &&
                                        formik.touched.email
                                    }
                                    helperText={
                                        !!formik.errors.email &&
                                        formik.touched.email
                                            ? formik.errors.email
                                            : ""
                                    }
                                />
                            </div>
                            <div className="form-control">
                                <TextField
                                    name="contactNumber"
                                    label={"Contact Number"}
                                    variant="standard"
                                    className={styles.textField}
                                    fullWidth
                                    {...formik.getFieldProps("contactNumber")}
                                    error={
                                        !!formik.errors.contactNumber &&
                                        formik.touched.contactNumber
                                    }
                                    helperText={
                                        !!formik.errors.contactNumber &&
                                        formik.touched.contactNumber
                                            ? formik.errors.contactNumber
                                            : ""
                                    }
                                />
                            </div>
                            <div className="form-control">
                                <TextField
                                    name="pickUpBranch"
                                    label={"LBC Pickup Branch Address"}
                                    variant="standard"
                                    className={styles.textField}
                                    fullWidth
                                    {...formik.getFieldProps("pickUpBranch")}
                                    error={
                                        !!formik.errors.pickUpBranch &&
                                        formik.touched.pickUpBranch
                                    }
                                    helperText={
                                        !!formik.errors.pickUpBranch &&
                                        formik.touched.pickUpBranch
                                            ? formik.errors.pickUpBranch
                                            : ""
                                    }
                                />
                            </div>
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
                        className={styles.button}
                        type="submit"
                        disabled={!formik.isValid}
                    >
                        Next
                    </Button>
                </DialogActions>
            </form>
            {isUploadAttachmentDisplayed && (
                <UploadAttachment
                    isOpen={isUploadAttachmentDisplayed}
                    onClose={() => setIsUploadAttachmentDisplayed(false)}
                    shoes={shoesToBuy}
                    formValues={formik.values}
                    onCloseBuyNow={onClose}
                />
            )}
        </Dialog>
    );
};

export default BuyNow;
