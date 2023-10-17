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

            {options.map((items, index) => {
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
                                        !items.isDropDown ? false : undefined
                                    }
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            items.isDropDown ? (
                                                <ExpandMoreIcon />
                                            ) : null
                                        }
                                    >
                                        {items.brand}
                                    </AccordionSummary>
                                    {items.shoes.map((items) => {
                                        return (
                                            <AccordionDetails key={items}>
                                                {items}
                                            </AccordionDetails>
                                        );
                                    })}
                                </Accordion>
                            );
                        })}
                    </Accordion>
                );
            })}
        </Stack>
    );
};

export default Sidebar;
