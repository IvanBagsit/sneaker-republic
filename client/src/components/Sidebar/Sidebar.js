import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import styles from "./Sidebar.module.css";
import logo from "../../images/logo/logo.png";
import Scrollbar from "../Common/Scrollbar";
import MenuOptions from "../Common/menu/MenuOptions";
import client from "../Common/ApiClient";

const Sidebar = ({ isContentLoaded }) => {
    const [menuOptions, setMenuOptions] = useState([]);

    const callMenuOptionsApi = async () => {
        await client("/home/menu")
            .then((menu) => {
                const { data } = menu;
                setMenuOptions(data);
                isContentLoaded(true);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        callMenuOptionsApi();
    }, []);

    return (
        <Stack direction="column" className={styles.background}>
            <div>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <Scrollbar maxHeight={"65vh"}>
                {menuOptions?.map((items, index) => {
                    return <MenuOptions items={items} key={items.name} />;
                })}
            </Scrollbar>
        </Stack>
    );
};

export default Sidebar;
