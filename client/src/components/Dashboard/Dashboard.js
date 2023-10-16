import { useState } from "react";
import styles from "./Dashboard.module.css";
import GetStarted from "./GetStarted";

const Dashboard = () => {
    const [isGetStartedClosed, setIsGetStartedClosed] = useState(false);

    const handleGetStarted = (data) => {
        setIsGetStartedClosed(data);
        console.log("ivan", data);
    };
    return (
        <div>
            {!isGetStartedClosed && (
                <GetStarted isGetStartedClosed={handleGetStarted} />
            )}
        </div>
    );
};

export default Dashboard;
