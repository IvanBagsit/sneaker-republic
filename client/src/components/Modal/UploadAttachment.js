import { forwardRef, useEffect, useState } from "react";
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

export const UploadAttachmentContent = ({
    handleMOPOpen,
    isClosing,
    handleAttachmentUpload,
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
            const url = URL.createObjectURL(file);
            if (selectedFile.length >= 5) {
                const status = {
                    hasError: true,
                    errorMessage: "Maximum of 5 files",
                };
                return { file, url, status };
            } else if (file.size >= MAX_SIZE) {
                const status = {
                    hasError: true,
                    errorMessage: "Max 4MB per attachment",
                };
                return { file, url, status };
            } else if (!acceptedFileTypes.includes(file.type.toLowerCase())) {
                const status = {
                    hasError: true,
                    errorMessage: "File type not supported",
                };
                return { file, url, status };
            } else {
                const status = {
                    hasError: false,
                    errorMessage: "",
                };
                return { file, url, status };
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
                Please upload screenshot/s of payment: <b>.jpg .png .pdf</b>
            </DialogContentText>
            <DialogContentText>
                Max file count: <b>5</b>, Max file size: <b>4mb</b>
            </DialogContentText>
            <DialogContentText>
                Mode of Payment:{" "}
                <Button size="small" onClick={handleMOP} variant="outlined">
                    View
                </Button>
            </DialogContentText>
            <div className={styles.uploadsection} {...getRootProps()}>
                <input {...getInputProps()} hidden />
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
                <div style={{ marginTop: "2%" }}>
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

const UploadAttachment = ({ isOpen = false, onClose, shoes }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [attachments, setAttachments] = useState([]);

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

    const constHandleSubmit = () => {
        console.log("buying shoes and details...", shoes);
        console.log("...attachments", attachments);
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
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
                    onClick={constHandleSubmit}
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
        </Dialog>
    );
};

export default UploadAttachment;
