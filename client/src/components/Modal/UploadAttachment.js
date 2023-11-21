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
import styles from "./UploadAttachment.module.css";
import ModeOfPayment from "./ModeOfPayment";
import dnd50 from "../../images/others/dnd50.png";
import dnd100 from "../../images/others/dnd100.png";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UploadAttachment = ({ isOpen = false, onClose, details }) => {
    const [isMOPOpen, setIsMOPOpen] = useState(false);

    const handleClose = () => {
        onClose();
    };

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
                <div className={styles.uploadsection}>
                    <div>
                        <img src={dnd100} alt="draganddrop" />
                    </div>
                    <div>
                        <DialogContentText className={styles.dragdropText}>
                            Drag and drop files here or click 'Choose file'
                            buton
                        </DialogContentText>
                    </div>
                    <div style={{ marginTop: "3%" }}>
                        <Button variant="outlined" color="primary">
                            Choose File
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
