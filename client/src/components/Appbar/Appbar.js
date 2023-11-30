import styles from "./Appbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Scrollbar from "../Common/Scrollbar";
import { useState } from "react";
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

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className={styles.background}>
            <div className={styles.content} onClick={toggleMenu}>
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
