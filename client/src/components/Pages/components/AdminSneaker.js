import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import styles from "./AdminSneaker.module.css";
import Scrollbar from "../../Common/Scrollbar";

const AdminSneaker = () => {
    return (
        <div className={styles.background}>
            <Scrollbar maxHeight={"100%"}>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <div>
                            Name: AF1 - Brand: Nike - Code: CDT1BB - Price: P800
                        </div>
                        <div>Men [7, 8, 8.5, 9.5, 10, 11]</div>
                        <div>Women [5.5, 6.5, 7, 8]</div>
                        <div className={styles.images}>
                            <div>Main Image</div>
                            <div>1st Image</div>
                            <div>2nd Image</div>
                            <div>3rd Image</div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={styles.buttons}
                        >
                            Update
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            className={styles.buttons}
                            style={{ backgroundColor: "white" }}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </Scrollbar>
        </div>
    );
};

export default AdminSneaker;
