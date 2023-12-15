import { forwardRef, useEffect, useState, useRef } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDropzone } from "react-dropzone";

import AttachmentContainer from "./components/AttachmentContainer";
import styles from "./UploadAttachment.module.css";
import ModeOfPayment from "./ModeOfPayment";
import dnd100 from "../../images/others/dnd100.png";
import client from "../Common/ApiClient";
import FullPageLoader from "../Common/FullPageLoader";
import Success from "./Success";
import ErrorModal from "./ErrorModal";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const MAX_SIZE = 4000000;
export const acceptedFileTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "application/pdf",
];

export const acceptedImageTypes = ["image/png", "image/jpeg", "image/jpg"];

export const UploadAttachmentContent = ({
    handleMOPOpen,
    isClosing,
    handleAttachmentUpload,
    maxFileCount = 5,
    uploadMessage,
    isImageOnly = false,
}) => {
    const [selectedFile, setSelectedFile] = useState([]);

    useEffect(() => {
        if (isClosing) {
            setSelectedFile([]);
        }
    }, [isClosing]);

    useEffect(() => {
        handleAttachmentUpload(selectedFile);
    }, [selectedFile]);

    const handleMOP = () => {
        handleMOPOpen(true);
    };

    const verifyFiles = (files) => {
        const updatedFiles = files.map((file) => {
            console.log("file", file);
            const url = URL.createObjectURL(file);
            if (selectedFile.length >= maxFileCount) {
                const status = {
                    hasError: true,
                    errorMessage: `Maximum of ${maxFileCount} files`,
                };
                return { file, url, status, type: file.type };
            } else if (file.size >= MAX_SIZE) {
                const status = {
                    hasError: true,
                    errorMessage: "Max 4MB per attachment",
                };
                return { file, url, status, type: file.type };
            } else if (
                (!isImageOnly &&
                    !acceptedFileTypes.includes(file.type.toLowerCase())) ||
                (isImageOnly &&
                    !acceptedImageTypes.includes(file.type.toLowerCase()))
            ) {
                const status = {
                    hasError: true,
                    errorMessage: "File type not supported",
                };
                return { file, url, status, type: file.type };
            } else {
                const status = {
                    hasError: false,
                    errorMessage: "",
                };
                return { file, url, status, type: file.type };
            }
        });
        return updatedFiles;
    };

    const onDrop = (files) => {
        const structuredFile = verifyFiles(files);
        const verifiedFiles = structuredFile.filter(
            (files) => files.status.hasError === false
        );
        setSelectedFile((prev) => [...prev, ...verifiedFiles]);
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        open: openFileBrowser,
    } = useDropzone({
        onDrop,
        noClick: true,
        disabled: false,
    });

    return (
        <div>
            <DialogContentText>
                {uploadMessage || (
                    <span>
                        Please upload screenshot/s of payment:{" "}
                        <b>.jpg .png .pdf</b>
                    </span>
                )}
            </DialogContentText>
            <DialogContentText>
                Max file count: <b>{maxFileCount}</b>, Max file size: <b>4mb</b>
            </DialogContentText>
            {handleMOPOpen && (
                <DialogContentText>
                    Mode of Payment:{" "}
                    <Button size="small" onClick={handleMOP} variant="outlined">
                        View
                    </Button>
                </DialogContentText>
            )}
            <div className={styles.uploadsection} {...getRootProps()}>
                <input {...getInputProps()} hidden multiple type="file" />
                <div>
                    <img src={dnd100} alt="draganddrop" />
                </div>
                <div>
                    <DialogContentText className={styles.dragdropText}>
                        {isDragActive
                            ? "Drop here"
                            : 'Drag and drop files here or click "Upload file" button'}
                    </DialogContentText>
                </div>
                <div style={{ marginTop: "1%" }}>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        onClick={openFileBrowser}
                    >
                        Upload file
                    </Button>
                </div>
                {selectedFile && (
                    <AttachmentContainer attachments={selectedFile} />
                )}
            </div>
        </div>
    );
};

const UploadAttachment = ({
    isOpen = false,
    onClose,
    shoes,
    formValues,
    onCloseBuyNow,
}) => {
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

    const handleSubmit = () => {
        const formData = new FormData();
        attachments.forEach((item) => {
            formData.append("attachments", item.file);
        });
        shoes.shoes.forEach((item) => {
            formData.append("shoes", JSON.stringify(item));
        });
        formData.append("formValues", JSON.stringify(formValues));
        callConfirmOrder(formData);
        retryRef.current = handleSubmit;
    };

    return (
        <Dialog
            open={isOpen}
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
            <DialogTitle>Upload Attachment/s</DialogTitle>
            <DialogContent>
                <UploadAttachmentContent
                    handleMOPOpen={handleMOPOpen}
                    isClosing={isClosing}
                    handleAttachmentUpload={handleAttachmentUpload}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    variant="outlined"
                    className={styles.buttons}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    className={styles.buttons}
                    color="primary"
                    disabled={attachments.length === 0}
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
            {isSuccess && (
                <Success
                    isOpen={isSuccess}
                    title={"Order Successful!"}
                    message={"We will contact you very soon."}
                    onClose={() => {
                        setIsSuccess(false);
                        handleClose();
                        onCloseBuyNow();
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

export default UploadAttachment;
