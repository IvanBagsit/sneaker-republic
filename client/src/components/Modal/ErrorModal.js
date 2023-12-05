import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
} from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import styles from "./ErrorModal.module.css";
import DeviceChecker from "../Common/DeviceChecker";

const ErrorModal = ({ isOpen = false, title, message, onClose, onRetry }) => {
    const device = DeviceChecker();
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth={"xs"} fullWidth>
            <DialogContent className={styles.content}>
                <HighlightOffRoundedIcon
                    style={{
                        fill: "#D93025",
                        fontSize: `${device === "desktop" ? "5vw" : "8vh"}`,
                    }}
                />
                <DialogContentText>
                    <b>{title}</b>
                </DialogContentText>
                <DialogContentText style={{ marginBottom: "10%" }}>
                    {message}
                </DialogContentText>
                <Button variant="outlined" color="error" onClick={onRetry}>
                    Retry
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default ErrorModal;
