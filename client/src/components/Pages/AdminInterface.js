import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import styles from "./AdminInterface.module.css";
import AdminSneaker from "./components/AdminSneaker";

const AdminInterface = () => {
    return (
        <div className={styles.background}>
            <div className={styles.contentContainer}>
                <div className={styles.addButton}>
                    <Button variant="contained" color="primary">
                        Add New Sneaker
                    </Button>
                </div>
                <div className={styles.list}>
                    <div>List of Sneakers</div>
                    <AdminSneaker />
                </div>
            </div>
        </div>
    );
};

export default AdminInterface;
