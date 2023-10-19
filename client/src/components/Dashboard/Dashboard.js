import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import GetStarted from "./GetStarted";
import Sidebar from "../Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { handleGetIsStarted } from "../Common/SessionStorage";

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
                <Sidebar />
                // <Routes>
                //     <Route path="/" element={<Home />} />
                //     <Route path="/home" element={<Home />} />
                //     <Route path="/about" element={<About />} />
                //     <Route path="/portfolio" element={<Portfolio />} />
                //     <Route path="/*" element={<Invalid />} />
                // </Routes>
            )}
        </div>
    );
};

export default Dashboard;
