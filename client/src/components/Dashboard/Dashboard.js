import { useEffect, useState } from "react";
import { SpeedDial, SpeedDialIcon, Box, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { handleGetIsStarted } from "../Common/SessionStorage";
import styles from "./Dashboard.module.css";
import Home from "../Pages/Home";
import GetStarted from "./GetStarted";
import Sidebar from "../Sidebar/Sidebar";
import ViewAll from "../Pages/ViewAll";
import View from "../Pages/View";
import Cart from "../Pages/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
                            <Route path="/view" element={<View />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </Grid>
                    <SpeedDial
                        ariaLabel="cart"
                        hidden={false}
                        sx={{
                            position: "fixed",
                            bottom: 0,
                            right: 0,
                            margin: "0 2% 2% 0",
                        }}
                        icon={<ShoppingCartIcon />}
                    ></SpeedDial>
                </Grid>
            )}
        </div>
    );
};

export default Dashboard;
