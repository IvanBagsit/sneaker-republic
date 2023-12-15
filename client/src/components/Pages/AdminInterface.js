import { Button } from "@mui/material";
import styles from "./AdminInterface.module.css";
import AdminSneaker from "./components/AdminSneaker";
import { useEffect, useState } from "react";
import AddSneaker from "../Modal/AddSneaker";
import client from "../Common/ApiClient";
import FullPageLoader from "../Common/FullPageLoader";

const AdminInterface = () => {
    const [isAddSneakerOpen, setIsAddSneakerOpen] = useState(false);
    const [isAdminModalDone, setIsAdminModalDone] = useState(false);
    const [sneakers, setSneakers] = useState(null);
    const [isLoading, setIsLoading] = useState({
        enabled: false,
        message: "Please wait while we load the contents...",
    });

    const callGetAllSneakersApi = async () => {
        setIsLoading({
            enabled: true,
            message: "Please wait while we load the contents...",
        });
        await client
            .get("/db/get-all-sneakers")
            .then((data) => {
                console.log(data.data);
                const sneakers = data.data;
                setSneakers(sneakers);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setIsLoading({
                    enabled: false,
                    message: "Please wait while we load the contents...",
                });
            });
    };

    useEffect(() => {
        callGetAllSneakersApi();
    }, [isAddSneakerOpen, isAdminModalDone]);

    const handleAdminModalOperation = (value) => {
        setIsAdminModalDone(value);
    };

    return (
        <div className={styles.background}>
            {isLoading.enabled && (
                <FullPageLoader
                    open={isLoading.enabled}
                    message={isLoading.message}
                />
            )}
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
                    <AdminSneaker
                        sneakers={sneakers}
                        hasLoaded={handleAdminModalOperation}
                    />
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
