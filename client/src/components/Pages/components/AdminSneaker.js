import { Button } from "@mui/material";
import styles from "./AdminSneaker.module.css";
import Scrollbar from "../../Common/Scrollbar";
import client from "../../Common/ApiClient";
import { useEffect, useState } from "react";

const AdminSneaker = ({ sneakers }) => {
    return (
        <div className={styles.background}>
            <Scrollbar maxHeight={"100%"}>
                {sneakers?.map((item) => {
                    return (
                        <div className={styles.content} key={item._id}>
                            <div className={styles.details}>
                                <div>
                                    Name: {item.title} - Brand: {item.brand} -
                                    Price: P{item.price.toFixed(2)}
                                </div>
                                <div>
                                    Men size (US):{" "}
                                    {item.sizes[0].sizes.join(", ")}
                                </div>
                                <div>
                                    Women size (US):{" "}
                                    {item.sizes[1].sizes.join(", ")}
                                </div>
                                <div className={styles.images}>
                                    <div>
                                        <img
                                            src={item.mainImage.content}
                                            alt="mainImage"
                                        />
                                    </div>
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
                    );
                })}
            </Scrollbar>
        </div>
    );
};

export default AdminSneaker;
