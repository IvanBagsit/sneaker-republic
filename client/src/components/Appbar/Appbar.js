import styles from "./Appbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Scrollbar from "../Common/Scrollbar";
import { useEffect, useState } from "react";
import MenuOptions from "../Common/menu/MenuOptions.js";

const Appbar = () => {
    const options = [
        {
            name: "Home",
            isDropDown: false,
            subOptions: [],
            haslink: true,
            link: "/home",
        },
        {
            name: "View All",
            isDropDown: false,
            subOptions: [],
            haslink: true,
            link: "/view-all",
        },
        {
            name: "Male",
            isDropDown: true,
            subOptions: [
                {
                    brand: "Nike",
                    isDropDown: true,
                    shoes: [
                        "Airforce 1",
                        "Airmax 97",
                        "Fragment",
                        "Giannis",
                        "Jordan 1",
                        "Jordan 3",
                        "Joyride",
                    ],
                },
                {
                    brand: "Addidas",
                    isDropDown: true,
                    shoes: ["Alphabounce", "Stansmith", "Ultraboost", "Yeezy"],
                },
            ],
            haslink: false,
        },
        {
            name: "Female",
            isDropDown: true,
            subOptions: [
                {
                    brand: "Nike",
                    isDropDown: true,
                    shoes: [
                        "Airforce 1",
                        "Airmax 97",
                        "Fragment",
                        "Jordan 1",
                        "Joyride",
                    ],
                },
                {
                    brand: "Addidas",
                    isDropDown: true,
                    shoes: ["Alphabounce", "Stansmith", "Ultraboost", "Yeezy"],
                },
            ],
            haslink: false,
        },
        {
            name: "Kids",
            isDropDown: true,
            subOptions: [
                {
                    brand: "Nike",
                    isDropDown: true,
                    shoes: [
                        "Airforce 1",
                        "Airmax 97",
                        "Fragment",
                        "Jordan 1",
                        "Joyride",
                    ],
                },
                {
                    brand: "Addidas",
                    isDropDown: true,
                    shoes: ["Alphabounce", "Stansmith", "Ultraboost", "Yeezy"],
                },
            ],
            haslink: false,
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
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
                    {options.map((items) => {
                        return <MenuOptions items={items} />;
                    })}
                </Scrollbar>
            )}
        </div>
    );
};

export default Appbar;
