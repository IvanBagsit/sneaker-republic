import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import GetStarted from "./GetStarted";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    const [isGetStartedClosed, setIsGetStartedClosed] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const handleGetStarted = (data) => {
        setIsGetStartedClosed(data);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsPageLoaded(true);
        }, 600);
    }, []);

    return (
        <div className={styles.background}>
            {!isGetStartedClosed && (
                <GetStarted isGetStartedClosed={handleGetStarted} />
            )}
            {isPageLoaded && <Sidebar />}
        </div>
    );
};

export default Dashboard;
