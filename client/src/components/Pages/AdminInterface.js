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
import { useState } from "react";
import AddSneaker from "../Modal/AddSneaker";

const AdminInterface = () => {
    const [isAddSneakerOpen, setIsAddSneakerOpen] = useState(false);

    return (
        <div className={styles.background}>
            <div className={styles.contentContainer}>
                <div className={styles.addButton}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsAddSneakerOpen(true)}
                    >
                        Add Sneaker
                    </Button>
                </div>
                <div className={styles.list}>
                    <div>
                        <h3>List of Sneakers</h3>
                    </div>
                    <AdminSneaker />
                </div>
            </div>
            {isAddSneakerOpen && (
                <AddSneaker
                    isOpen={isAddSneakerOpen}
                    onClose={() => setIsAddSneakerOpen(false)}
                />
            )}
        </div>
    );
};

export default AdminInterface;
