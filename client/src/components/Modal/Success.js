import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
} from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import styles from "./Success.module.css";
import DeviceChecker from "../Common/DeviceChecker";

const Success = ({ isOpen = false, title, message, onClose }) => {
    const device = DeviceChecker();
    return (
        <Dialog open={isOpen} maxWidth={"xs"} fullWidth>
            <DialogContent className={styles.content}>
                <CheckCircleOutlineRoundedIcon
                    style={{
                        fill: "#1976d1",
                        fontSize: `${device === "desktop" ? "5vw" : "8vh"}`,
                    }}
                />
                <DialogContentText>
                    <b>{title}</b>
                </DialogContentText>
                <DialogContentText
                    style={{ marginBottom: "10%", textAlign: "center" }}
                >
                    {message}
                </DialogContentText>
                <Button variant="contained" color="primary" onClick={onClose}>
                    Done
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default Success;
