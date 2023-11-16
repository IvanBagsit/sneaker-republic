import {
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    CardMedia,
    Tooltip,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import styles from "./View.module.css";

const View = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const viewableShoes = queryParams.get("shoes");

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div>Hi</div>
                <div>HELLO</div>
            </div>
        </div>
    );
};

export default View;
