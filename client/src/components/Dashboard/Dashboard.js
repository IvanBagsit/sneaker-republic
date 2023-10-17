import { useState } from "react";
import styles from "./Dashboard.module.css";
import GetStarted from "./GetStarted";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    const [isGetStartedClosed, setIsGetStartedClosed] = useState(false);

    const handleGetStarted = (data) => {
        setIsGetStartedClosed(data);
        console.log("ivan", data);
    };
    return (
        <div className={styles.background}>
            {!isGetStartedClosed && (
                <GetStarted isGetStartedClosed={handleGetStarted} />
            )}
            <Sidebar />
        </div>
    );
};

export default Dashboard;
