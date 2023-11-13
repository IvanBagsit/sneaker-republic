import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./View.module.css";

const View = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        console.log("ivan", queryParams.get("shoes"));
    });

    return (
        <div>
            <div>HI</div>
        </div>
    );
};

export default View;
