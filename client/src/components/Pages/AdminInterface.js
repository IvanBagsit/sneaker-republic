import { Button } from "@mui/material";
import styles from "./AdminInterface.module.css";
import AdminSneaker from "./components/AdminSneaker";
import { useEffect, useState } from "react";
import AddSneaker from "../Modal/AddSneaker";
import client from "../Common/ApiClient";

const AdminInterface = () => {
    const [isAddSneakerOpen, setIsAddSneakerOpen] = useState(false);
    const [sneakers, setSneakers] = useState(null);

    const callGetAllSneakersApi = async () => {
        await client
            .get("/db/get-all-sneakers")
            .then((data) => {
                console.log(data.data);
                const sneakers = data.data;
                setSneakers(sneakers);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        callGetAllSneakersApi();
    }, [isAddSneakerOpen]);

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
                    <AdminSneaker sneakers={sneakers} />
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
