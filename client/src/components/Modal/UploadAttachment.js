import { forwardRef, useEffect, useState, useCallback } from "react";
import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styles from "./UploadAttachment.module.css";
import ModeOfPayment from "./ModeOfPayment";
import dnd100 from "../../images/others/dnd100.png";

import { useDropzone } from "react-dropzone";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UploadAttachment = ({ isOpen = false, onClose, details }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);

    const handleClose = () => {
        onClose();
    };

    const onDrop = (acceptedFiles) => {
        setSelectedFile((prev) => [...prev, ...acceptedFiles]);
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
            <DialogTitle>Upload Attachment</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please upload screenshot of payment
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
