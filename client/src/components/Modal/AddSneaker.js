import { forwardRef, useEffect, useState, useRef } from "react";
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
import styles from "./AddSneaker.module.css";
import SneakersDetailsSchema from "../Common/yup/SneakersDetailsSchema";
import Success from "./Success";
import ErrorModal from "./ErrorModal";
import client from "../Common/ApiClient";
import FullPageLoader from "../Common/FullPageLoader";
import { UploadAttachmentContent } from "./UploadAttachment";
import AddSneakerForm from "./components/AddSneakerForm";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddSneaker = ({ isOpen, onClose }) => {
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
        setIsClosing(true);
        onClose();
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
        resolver: yupResolver(SneakersDetailsSchema),
    });

    const callConfirmOrder = async (formData) => {
        setIsSuccess(false);
        setIsError(false);
        setIsLoading({
            enabled: true,
            message: "Please wait while we add sneaker...",
        });
        await client
            .post("/db/insert-sneaker", formData, {
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

    const sizeValidation = (sizes) => {
        const sizeArray = [];
        if (sizes) {
            const tempArray = sizes.split(",");
            tempArray.forEach((item) => {
                if (!isNaN(item) && item) {
                    const size = parseFloat(item).toFixed(1);
                    sizeArray.push(size);
                }
            });
        }
        return sizeArray;
    };

    const callSubmitApi = (values) => {
        values.menSizes = sizeValidation(values.menSizes);
        values.womenSizes = sizeValidation(values.womenSizes);
        values.price = values.price.toFixed(2);
        values.url = values.name.toLowerCase().replace(/\s/g, "");

        const formData = new FormData();
        attachments.forEach((item) => {
            formData.append("attachments", item.file);
        });
        formData.append("formValues", JSON.stringify(values));
        callConfirmOrder(formData);
    };

    const submitForm = async () => {
        retryRef.current = submitForm;
        await handleSubmit((values) => callSubmitApi(values))();
    };

    const uploadMessage = () => {
        return (
            <span>
                Please upload pictures: <b>.jpg .png</b>
            </span>
        );
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
            <DialogTitle>Add Sneaker</DialogTitle>
            <DialogContent>
                <div className={styles.containerContent}>
                    <div className={styles.details}>
                        <AddSneakerForm control={control} trigger={trigger} />
                    </div>
                    <div className={styles.uploadAttachments}>
                        <UploadAttachmentContent
                            maxFileCount={4}
                            uploadMessage={uploadMessage()}
                            isClosing={isClosing}
                            handleAttachmentUpload={handleAttachmentUpload}
                            isImageOnly={true}
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
                    Add
                </Button>
            </DialogActions>
            {isSuccess && (
                <Success
                    isOpen={isSuccess}
                    title={"Sneakers added successfully!"}
                    message={"You may check it at View All page"}
                    onClose={() => {
                        setIsSuccess(false);
                        handleClose();
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

export default AddSneaker;
