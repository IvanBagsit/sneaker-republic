import styles from "./GetStarted.module.css";
import { Backdrop, Button, Grid, Typography } from "@mui/material";
import shoesPic from "../../images/logo/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleIsStarted } from "../Common/SessionStorage";

const GetStarted = ({ isGetStartedClosed }) => {
    const [isBackdropEnabled, setIsBackdropEnabled] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const onClickGetStarted = () => {
        setIsClicked(true);
        setTimeout(() => {
            isGetStartedClosed(true);
            setIsBackdropEnabled(false);
        }, 800);
        handleIsStarted(true);
    };

    return (
        <Backdrop
            sx={{
                backgroundColor: "transparent",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isBackdropEnabled}
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={`${styles.background} ${
                    isClicked ? styles.slideUp : ""
                }`}
            >
                <Grid item className={styles.title}>
                    <Typography variant="h3" style={{ fontFamily: "unset" }}>
                        <b>SNEAKERS REPUBLIC</b>
                    </Typography>
                </Grid>
                <Grid item>
                    <div className={styles.line}></div>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="start"
                >
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        xs={6.8}
                    >
                        <div className={styles.subtitle}>
                            <Grid item>
                                <Typography
                                    variant="h5"
                                    style={{ fontFamily: "unset" }}
                                >
                                    <b>MAKE A STATEMENT WITH</b>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="h5"
                                    style={{ fontFamily: "unset" }}
                                >
                                    <b>EVERY STRIDE</b>
                                </Typography>
                            </Grid>
                            <Grid item className={styles.button}>
                                <Link to={"/home"}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="success"
                                        onClick={onClickGetStarted}
                                        style={{ fontFamily: "unset" }}
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={5.2}>
                        <img
                            src={shoesPic}
                            alt="shoes"
                            className={styles.logo}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Backdrop>
    );
};

export default GetStarted;
