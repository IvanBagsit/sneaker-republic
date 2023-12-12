import {
    Button,
    Slide,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import styles from "./AdminInterface.module.css";

const AdminInterface = () => {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div>
                    <Button variant="contained" color="primary">
                        Add New Sneaker
                    </Button>
                </div>
                <div>
                    <div>List of Sneakers</div>
                    <div>
                        <div>
                            <div>
                                Name: AF1 - Brand: Nike - Code: CDT1BB - Price:
                                P800
                            </div>
                            <div>Men [7, 8, 8.5, 9.5, 10, 11]</div>
                            <div>Women [5.5, 6.5, 7, 8]</div>
                        </div>
                        <div>
                            <Button variant="contained" color="secondary">
                                Update
                            </Button>
                            <Button variant="outlined" color="error">
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminInterface;
