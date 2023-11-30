import styles from "./Appbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Scrollbar from "../Common/Scrollbar";
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

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
            <div className={styles.content}>
                <div className={styles.title}>
                    <h4>Sneakers Republic</h4>
                </div>
                <div className={styles.menu} onClick={toggleMenu}>
                    <MenuIcon />
                </div>
            </div>
            {isMenuOpen && (
                <Scrollbar maxHeight={"30vh"}>
                    {options.map((items) => {
                        return (
                            <Accordion
                                key={items.name}
                                expanded={!items.isDropDown ? false : undefined}
                            >
                                {items.haslink && (
                                    <Link
                                        to={items.link}
                                        className={styles.link}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                items.isDropDown ? (
                                                    <ExpandMoreIcon />
                                                ) : null
                                            }
                                        >
                                            <Typography
                                                style={{ fontFamily: "unset" }}
                                            >
                                                {items.name}
                                            </Typography>
                                        </AccordionSummary>
                                    </Link>
                                )}

                                {!items.haslink && (
                                    <AccordionSummary
                                        expandIcon={
                                            items.isDropDown ? (
                                                <ExpandMoreIcon />
                                            ) : null
                                        }
                                    >
                                        <Typography
                                            style={{ fontFamily: "unset" }}
                                        >
                                            {items.name}
                                        </Typography>
                                    </AccordionSummary>
                                )}

                                {items.subOptions.map((items) => {
                                    return (
                                        <Accordion
                                            key={items.brand}
                                            expanded={
                                                !items.isDropDown
                                                    ? false
                                                    : undefined
                                            }
                                        >
                                            <AccordionSummary
                                                expandIcon={
                                                    items.isDropDown ? (
                                                        <ExpandMoreIcon />
                                                    ) : null
                                                }
                                                style={{
                                                    backgroundColor: "#E8E8E8",
                                                }}
                                            >
                                                <span
                                                    style={{ marginLeft: "5%" }}
                                                >
                                                    {items.brand}
                                                </span>
                                            </AccordionSummary>
                                            {items.shoes.map((items) => {
                                                const templink = items.replace(
                                                    " ",
                                                    ""
                                                );
                                                const link =
                                                    templink.toLowerCase();
                                                return (
                                                    <Link
                                                        to={`/view?shoes=${link}`}
                                                        key={items}
                                                        className={styles.link}
                                                    >
                                                        <AccordionDetails
                                                            className={
                                                                styles.shoesOption
                                                            }
                                                        >
                                                            <span
                                                                style={{
                                                                    marginLeft:
                                                                        "10%",
                                                                }}
                                                            >
                                                                {items}
                                                            </span>
                                                        </AccordionDetails>
                                                    </Link>
                                                );
                                            })}
                                        </Accordion>
                                    );
                                })}
                            </Accordion>
                        );
                    })}
                </Scrollbar>
            )}
        </div>
    );
};

export default Appbar;
