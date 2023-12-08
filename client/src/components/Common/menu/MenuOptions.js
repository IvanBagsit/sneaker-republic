import styles from "./MenuOptions.module.css";
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MenuOptions = ({ items, isLoginModalOpen }) => {
    const isLoggingIn = (value) => {
        if (value.toLowerCase() === "admin login") {
            isLoginModalOpen(true);
        } else {
            isLoginModalOpen(false);
        }
    };
    return (
        <Accordion
            key={items.name}
            expanded={!items.isDropDown ? false : undefined}
        >
            {items.haslink && (
                <Link to={items.link} className={styles.link}>
                    <AccordionSummary
                        expandIcon={
                            items.isDropDown ? <ExpandMoreIcon /> : null
                        }
                    >
                        <Typography style={{ fontFamily: "unset" }}>
                            {items.name}
                        </Typography>
                    </AccordionSummary>
                </Link>
            )}

            {!items.haslink && (
                <AccordionSummary
                    expandIcon={items.isDropDown ? <ExpandMoreIcon /> : null}
                    onClick={() => isLoggingIn(items.name)}
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
                        expanded={!items.isDropDown ? false : undefined}
                    >
                        <AccordionSummary
                            expandIcon={
                                items.isDropDown ? <ExpandMoreIcon /> : null
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
                            const templink = items.replace(" ", "");
                            const link = templink.toLowerCase();
                            return (
                                <Link
                                    to={`/view?shoes=${link}`}
                                    key={items}
                                    className={styles.link}
                                >
                                    <AccordionDetails
                                        className={styles.shoesOption}
                                    >
                                        <span
                                            style={{
                                                marginLeft: "10%",
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
};

export default MenuOptions;
