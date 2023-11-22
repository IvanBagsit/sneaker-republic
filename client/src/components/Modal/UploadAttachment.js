import { forwardRef, useState } from "react";
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

const UploadAttachment = ({ isOpen = false, onClose, attachments }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);

    const handleClose = () => {
        setIsMOPOpen(false);
        setSelectedFile([]);
        onClose();
    };

    const verifyFiles = (files) => {
        const updatedFiles = files.map((file) => {
            const url = URL.createObjectURL(file);
            if (
                acceptedFileTypes.includes(file.type.toLowerCase()) &&
                file.size < MAX_SIZE
            ) {
                const status = {
                    hasError: false,
                    errorMessage: "",
                };
                return { file, url, status };
            } else if (file.size >= MAX_SIZE) {
                const status = {
                    hasError: true,
                    errorMessage:
                        "File size limit reached. Max 4MB per attachment",
                };
                return { file, url, status };
            } else {
                const status = {
                    hasError: true,
                    errorMessage: "File type not supported",
                };
                return { file, url, status };
            }
        });
        return updatedFiles;
    };

    const onDrop = (files) => {
        const stucturedFile = verifyFiles(files);
        setSelectedFile((prev) => [...prev, ...stucturedFile]);
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
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            maxWidth={"sm"}
            fullWidth
        >
            <DialogTitle>Upload Attachment/s</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please upload screenshot/s of payment
                </DialogContentText>
                <DialogContentText>
                    Mode of Payment:{" "}
                    <Button
                        size="small"
                        onClick={() => setIsMOPOpen(true)}
                        variant="outlined"
                    >
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
                    <div style={{ marginTop: "3%" }}>
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
                    onClick={handleClose}
                    variant="contained"
                    className={styles.buttons}
                    color="primary"
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
