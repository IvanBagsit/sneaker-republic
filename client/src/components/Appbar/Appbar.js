import styles from "./Appbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Scrollbar from "../Common/Scrollbar";
import { useEffect, useState } from "react";
import MenuOptions from "../Common/menu/MenuOptions.js";
import client from "../Common/ApiClient.js";

const Appbar = ({ isContentLoaded, isLoginModalOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
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

    const handleLoginModal = (value) => {
        isLoginModalOpen(value);
    };

    useEffect(() => {
        callMenuOptionsApi();
    }, [isLoginModalOpen]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleLogout = () => {
        callMenuOptionsApi();
    };

    useEffect(() => {
        if (isMenuOpen) {
            setBackgroundColor("#cccccc");
        } else {
            setBackgroundColor("#ffffff");
        }
    }, [isMenuOpen]);

    return (
        <div className={styles.background}>
            <div
                className={styles.content}
                style={{
                    backgroundColor: `${backgroundColor}`,
                    borderBottomLeftRadius: "5% 50%",
                    borderBottomRightRadius: "5% 50%",
                    borderTopLeftRadius: "5% 50%",
                    borderTopRightRadius: "5% 50%",
                }}
                onClick={toggleMenu}
            >
                <div className={styles.title}>
                    <h4>Sneakers Republic</h4>
                </div>
                <div className={styles.menu}>
                    <MenuIcon />
                </div>
            </div>
            {isMenuOpen && (
                <Scrollbar maxHeight={"40vh"}>
                    {menuOptions?.map((items, index) => {
                        return (
                            <MenuOptions
                                items={items}
                                key={items.name}
                                isLoginModalOpen={handleLoginModal}
                                logout={handleLogout}
                            />
                        );
                    })}
                </Scrollbar>
            )}
        </div>
    );
};

export default Appbar;
