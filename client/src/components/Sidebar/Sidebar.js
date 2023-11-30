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
import MenuOptions from "../Common/menu/MenuOptions";

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
                    return <MenuOptions items={items} />;
                })}
            </Scrollbar>
        </Stack>
    );
};

export default Sidebar;
