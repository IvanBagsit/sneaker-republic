import styles from "./Sidebar.module.css";
import logo from "../../images/logo/logo.png";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Scrollbar from "../Common/Scrollbar";
import { Link } from "react-router-dom";

const Sidebar = () => {
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

    return (
        <Stack direction="column" className={styles.background}>
            <div>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <Scrollbar maxHeight={"65vh"}>
                {options.map((items) => {
                    return (
                        <Accordion
                            key={items.name}
                            expanded={!items.isDropDown ? false : undefined}
                        >
                            {items.haslink && (
                                <Link to={items.link} className={styles.link}>
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
                                    <Typography style={{ fontFamily: "unset" }}>
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
                                            <span style={{ marginLeft: "5%" }}>
                                                {items.brand}
                                            </span>
                                        </AccordionSummary>
                                        {items.shoes.map((items) => {
                                            const templink = items.replace(
                                                " ",
                                                ""
                                            );
                                            const link = templink.toLowerCase();
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
        </Stack>
    );
};

export default Sidebar;
