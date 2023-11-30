import {
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    CardMedia,
    Tooltip,
} from "@mui/material";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import gmailIcon from "../../images/contact/gmailIcon.png";
import facebookIcon from "../../images/contact/facebookIcon.png";
import instagramIcon from "../../images/contact/instagramIcon.png";
import ownerImage from "../../images/owner/owner.jpg";
import { AF1Unisex1, J1Unisex2, J3Men4 } from "../Common/Shoes";
import DeviceChecker from "../Common/DeviceChecker.js";

const Home = () => {
    const featuredShoes = [
        {
            name: "Airforce 1",
            brand: "Nike",
            price: 500,
            image: AF1Unisex1,
            link: "/view?shoes=airforce1",
        },
        {
            name: "Jordan 1",
            brand: "Nike",
            price: 600,
            image: J1Unisex2,
            link: "/view?shoes=jordan1",
        },
        {
            name: "Jordan 3",
            brand: "Nike",
            price: 550,
            image: J3Men4,
            link: "/view?shoes=jordan3",
        },
    ];

    const gmailCompose = {
        recipient: "ivanbagsit23@gmail.com",
        subject: "Message from Sneakers Republic",
        body: "",
    };

    const contactDetails = [
        {
            name: "Gmail",
            icon: gmailIcon,
            link: `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailCompose.recipient}&su=${gmailCompose.subject}&body=${gmailCompose.body}`,
        },
        {
            name: "Facebook",
            icon: facebookIcon,
            link: "https://www.facebook.com/ivan.bagsit/",
        },
        {
            name: "Instagram",
            icon: instagramIcon,
            link: "https://www.instagram.com/ivanbagsit_/",
        },
    ];

    const device = DeviceChecker();

    const featuredImageDimension = () => {
        if (device === "desktop") {
            return {
                width: "23vh",
                height: "23vh",
            };
        } else {
            return {
                width: "30vw",
                height: "30vw",
            };
        }
    };

    const cardContentDimension = () => {
        if (device === "desktop") {
            return {
                width: "23vh",
                flex: 1,
            };
        } else {
            return {
                width: "25vw",
                flex: 1,
            };
        }
    };

    const cardDimension = () => {
        if (device === "desktop") {
            return {
                display: "flex",
                height: "20vw",
                margin: "0 2% 0 2%",
            };
        } else {
            return {
                display: "flex",
                height: "30vw",
                margin: "1% 0 1% 0",
            };
        }
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
            className={styles.mainBackground}
        >
            <Grid item className={styles.featuredBackground}>
                <Grid
                    container
                    direction={`${device === "desktop" ? "column" : "row"}`}
                    justifyContent="center"
                    alignItems="center"
                    className={`${styles.background} ${styles.featured}`}
                >
                    <Grid item className={styles.featuredTitle}>
                        <Typography variant="h5">
                            <b>Featured of the week</b>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {featuredShoes.map((items) => {
                            return (
                                <Card key={items.name} sx={cardDimension()}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <CardContent
                                            sx={cardContentDimension()}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                            >
                                                {items.name}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                {items.brand}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                component="div"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                P{items.price}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Link to={items.link}>
                                        <CardMedia
                                            component="img"
                                            sx={featuredImageDimension()}
                                            image={items.image}
                                            alt="AF1"
                                        />
                                    </Link>
                                </Card>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{ flex: 1 }}>
                <div className={`${styles.background} ${styles.list}`}>
                    <div className={styles.content}>
                        <div className={styles.contentItem}>
                            <img
                                src={ownerImage}
                                alt="owner"
                                style={{
                                    height: "40vh",
                                    width: "40vh",
                                    borderRadius: "20%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div
                            className={styles.contentItem}
                            style={{ width: "40vw" }}
                        >
                            <div>
                                <h3>Welcome to Sneakers Republic!</h3>
                            </div>
                            <div>
                                Hi! I'm Ivan and this is my partner Tin. We are
                                the owner and creator of this e-commerce
                                website. This project is being built to scale
                                and help our small business in the shoes
                                industry. As of now, this project doesn't have
                                built-in payment feature yet but rest assured we
                                are doing our best to improve our website.
                            </div>
                            <div
                                style={{
                                    marginTop: "3%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <span style={{ marginRight: "2%" }}>
                                    For inquiries, please contact us on these
                                    platforms:
                                </span>
                                {contactDetails.map((items, index) => {
                                    return (
                                        <Tooltip
                                            arrow
                                            title={items.name}
                                            key={items.name}
                                        >
                                            <a
                                                href={items.link}
                                                target="_blank"
                                            >
                                                <img
                                                    src={items.icon}
                                                    alt={items.name}
                                                />
                                            </a>
                                        </Tooltip>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Home;
