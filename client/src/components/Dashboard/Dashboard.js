import { useEffect, useState } from "react";
import { SpeedDial, Grid, Badge } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { getUsername, handleGetIsStarted } from "../Common/SessionStorage";
import { useSelector } from "react-redux";
import styles from "./Dashboard.module.css";
import Home from "../Pages/Home";
import GetStarted from "./GetStarted";
import Sidebar from "../Sidebar/Sidebar";
import ViewAll from "../Pages/ViewAll";
import View from "../Pages/View";
import Cart from "../Modal/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Appbar from "../Appbar/Appbar";
import DeviceChecker from "../Common/DeviceChecker";
import FullPageLoader from "../Common/FullPageLoader";
import Login from "../Modal/Login";
import AdminInterface from "../Pages/AdminInterface";

const Dashboard = () => {
    const [isGetStartedClosed, setIsGetStartedClosed] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOptionsLoaded, setIsMenuOptionsLoaded] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleGetStarted = (data) => {
        setIsGetStartedClosed(data);
    };

    const handleMenuLoaded = (value) => {
        setIsMenuOptionsLoaded(value);
    };

    const isSpeedDialHidden = useSelector(
        (state) => state.cartSlice.isSpeedDialHidden
    );

    const numberOfCartItem = useSelector(
        (state) => state.cartSlice.numberOfCartItem
    );

    const handleLoginModal = (value) => {
        setIsLoginModalOpen(value);
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

    const device = DeviceChecker();

    const hasUsername = getUsername();

    return (
        <div className={styles.background}>
            {!isGetStartedClosed && (
                <GetStarted isGetStartedClosed={handleGetStarted} />
            )}
            {!isMenuOptionsLoaded && isGetStartedClosed && (
                <FullPageLoader
                    open={!isMenuOptionsLoaded}
                    message={"Please wait while we load the contents..."}
                />
            )}
            {isPageLoaded && (
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12} md={2}>
                        {device === "desktop" && (
                            <Sidebar
                                isContentLoaded={handleMenuLoaded}
                                isLoginModalOpen={handleLoginModal}
                            />
                        )}
                        {device !== "desktop" && (
                            <Appbar
                                isContentLoaded={handleMenuLoaded}
                                isLoginModalOpen={handleLoginModal}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Home
                                        isGetStartedClosed={isGetStartedClosed}
                                        isMenuOptionsLoaded={
                                            isMenuOptionsLoaded
                                        }
                                    />
                                }
                            />
                            <Route
                                path="/home"
                                element={
                                    <Home
                                        isGetStartedClosed={isGetStartedClosed}
                                        isMenuOptionsLoaded={
                                            isMenuOptionsLoaded
                                        }
                                    />
                                }
                            />
                            <Route path="/view-all" element={<ViewAll />} />
                            <Route path="/view" element={<View />} />
                            {hasUsername && (
                                <Route
                                    path="/admin"
                                    element={<AdminInterface />}
                                />
                            )}
                        </Routes>
                    </Grid>
                    <SpeedDial
                        ariaLabel="cart"
                        hidden={isSpeedDialHidden}
                        className={styles.speedDial}
                        icon={
                            <Badge
                                badgeContent={numberOfCartItem}
                                max={99}
                                color="warning"
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                            >
                                <ShoppingCartIcon />
                            </Badge>
                        }
                        onClick={() => {
                            setIsCartOpen(true);
                        }}
                    ></SpeedDial>
                    {isCartOpen && (
                        <Cart
                            isOpen={isCartOpen}
                            onClose={() => setIsCartOpen(false)}
                        />
                    )}
                    {isLoginModalOpen && (
                        <Login
                            isOpen={isLoginModalOpen}
                            onClose={() => setIsLoginModalOpen(false)}
                        />
                    )}
                </Grid>
            )}
        </div>
    );
};

export default Dashboard;
