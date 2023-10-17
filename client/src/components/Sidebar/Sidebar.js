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

const Sidebar = () => {
    const options = [
        {
            name: "View All",
            isDropDown: false,
            subOptions: [],
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
                        "TravisXFragment",
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
                        "TravisXFragment",
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
                        "TravisXFragment",
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
                            <AccordionSummary
                                expandIcon={
                                    items.isDropDown ? <ExpandMoreIcon /> : null
                                }
                            >
                                <Typography>{items.name}</Typography>
                            </AccordionSummary>
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
                                            return (
                                                <AccordionDetails
                                                    key={items}
                                                    className={
                                                        styles.shoesOption
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            marginLeft: "10%",
                                                        }}
                                                    >
                                                        {items}
                                                    </span>
                                                </AccordionDetails>
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
