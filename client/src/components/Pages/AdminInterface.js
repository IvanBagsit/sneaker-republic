import { Button, Pagination } from "@mui/material";
import styles from "./AdminInterface.module.css";
import AdminSneaker from "./components/AdminSneaker";
import { useEffect, useState } from "react";
import AddSneaker from "../Modal/AddSneaker";
import client from "../Common/ApiClient";
import FullPageLoader from "../Common/FullPageLoader";
import DeviceChecker from "../Common/DeviceChecker";

const AdminInterface = () => {
    const [isAddSneakerOpen, setIsAddSneakerOpen] = useState(false);
    const [isAdminModalDone, setIsAdminModalDone] = useState(false);
    const [sneakers, setSneakers] = useState(null);
    const [isLoading, setIsLoading] = useState({
        enabled: false,
        message: "Please wait while we load the contents...",
    });
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);

    const callGetAllSneakersApi = async (page, limit) => {
        setIsLoading({
            enabled: true,
            message: "Please wait while we load the contents...",
        });
        await client
            .get(`/db/get-all-sneakers?page=${page}&limit=${limit}`)
            .then(({ data }) => {
                setPage(data.currentPage);
                setTotalPage(data.totalPage);
                setSneakers(data.data);
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
        callGetAllSneakersApi(page, 5);
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
                    <div className={styles.contentTitle}>
                        <div>
                            <h3>List of Sneakers</h3>
                        </div>
                        <div>
                            <Pagination
                                count={totalPage}
                                siblingCount={
                                    DeviceChecker() === "desktop" ? 1 : 0
                                }
                                shape="rounded"
                                size="small"
                                color="primary"
                                page={page}
                                onChange={(event, page) =>
                                    callGetAllSneakersApi(page, 5)
                                }
                            />
                        </div>
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
