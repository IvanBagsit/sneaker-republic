import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import styles from "./Sidebar.module.css";
import logo from "../../images/logo/logo.png";
import Scrollbar from "../Common/Scrollbar";
import MenuOptions from "../Common/menu/MenuOptions";
import client from "../Common/ApiClient";
import FullPageLoader from "../Common/FullPageLoader";

const Sidebar = ({ isGetStartedClosed }) => {
    const [menuOptions, setMenuOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const callMenuOptionsApi = async () => {
        setIsLoading(true);
        await client("/home/menu")
            .then((menu) => {
                const { data } = menu;
                setMenuOptions(data);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        callMenuOptionsApi();
    }, []);

    return (
        <Stack direction="column" className={styles.background}>
            {isLoading && isGetStartedClosed && (
                <FullPageLoader open={isLoading} />
            )}
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
