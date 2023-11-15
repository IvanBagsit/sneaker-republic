import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./View.module.css";

const View = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const viewableShoes = queryParams.get("shoes");

    console.log("ivan", viewableShoes);

    return (
        <div>
            <div>{viewableShoes ? viewableShoes : "Null"}</div>
        </div>
    );
};

export default View;
