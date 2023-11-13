import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import GetStarted from "./GetStarted";
import Sidebar from "../Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { handleGetIsStarted } from "../Common/SessionStorage";
import Home from "../Pages/Home";
import { Grid } from "@mui/material";
import ViewAll from "../Pages/ViewAll";

const Dashboard = () => {
    const [isGetStartedClosed, setIsGetStartedClosed] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const handleGetStarted = (data) => {
        setIsGetStartedClosed(data);
    };

    useEffect(() => {
        if (!isGetStartedClosed) {
            setTimeout(() => {
                setIsPageLoaded(true);
            }, 600);
        }
    }, []);

    useEffect(() => {
        const isStarted = handleGetIsStarted();
        setIsGetStartedClosed(isStarted);
    }, []);

    return (
        <div className={styles.background}>
            {!isGetStartedClosed && (
                <GetStarted isGetStartedClosed={handleGetStarted} />
            )}
            {isPageLoaded && (
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/view-all" element={<ViewAll />} />
                        </Routes>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default Dashboard;
