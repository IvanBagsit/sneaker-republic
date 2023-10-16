import styles from "./GetStarted.module.css";
import { Button, Grid, Typography } from "@mui/material";
import shoesPic from "../../images/logo/logo.png";
import { useState } from "react";

const GetStarted = ({ isGetStartedClosed }) => {
    const [isClicked, setIsClicked] = useState(false);

    const onClickGetStarted = () => {
        setIsClicked(true);
        setTimeout(() => {
            isGetStartedClosed(true);
        }, 1000);
    };

    return (
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
                <Typography variant="h3">
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
                            <Typography variant="h5">
                                <b>MAKE A STATEMENT WITH</b>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                <b>EVERY STRIDE</b>
                            </Typography>
                        </Grid>
                        <Grid item className={styles.button}>
                            <Button
                                variant="contained"
                                size="large"
                                color="success"
                                onClick={onClickGetStarted}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={5.2}>
                    <img src={shoesPic} alt="shoes" className={styles.logo} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GetStarted;
