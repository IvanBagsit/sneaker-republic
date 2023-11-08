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

import AF1 from "../../images/shoes/Nike/AF1/Unisex 1.JPG";
import J1 from "../../images/shoes/Nike/J1/Unisex 2.JPG";
import J3 from "../../images/shoes/Nike/J3/Men size.JPG";

import gmailIcon from "../../images/contact/gmailIcon.png";
import facebookIcon from "../../images/contact/facebookIcon.png";
import instagramIcon from "../../images/contact/instagramIcon.png";

const Home = () => {
    const featuredShoes = [
        {
            name: "Airforce 1",
            brand: "Nike",
            price: 500,
            image: AF1,
            link: "/airforce1",
        },
        {
            name: "Jordan 1",
            brand: "Nike",
            price: 600,
            image: J1,
            link: "/jordan1",
        },
        {
            name: "Jordan 3",
            brand: "Nike",
            price: 550,
            image: J3,
            link: "/jordan3",
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

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
            style={{ height: "100%" }}
        >
            <Grid item style={{ width: "80vw" }}>
                <Grid
                    container
                    direction="column"
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
                                <Card
                                    key={items.name}
                                    sx={{
                                        display: "flex",
                                        height: "23vh",
                                        margin: "0 2% 0 2%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                flex: "1",
                                                width: "15vh",
                                            }}
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
                                            sx={{
                                                width: "23vh",
                                                height: "23vh",
                                            }}
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
                                src={AF1}
                                alt="owner"
                                style={{
                                    height: "40vh",
                                    width: "40vh",
                                    borderRadius: "20%",
                                }}
                            />
                        </div>
                        <div
                            className={styles.contentItem}
                            style={{ width: "40vw" }}
                        >
                            <div>
                                <h3>Hi! Welcome to Sneakers Republic!</h3>
                            </div>
                            <div>
                                This e-commerce website is being built to scale
                                and help our small business in the shoes
                                industry. As of now, this project doesn't have
                                payment feature yet but rest assured we are
                                doing our best to improve our website.
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
                                    Please message us if you find anything you
                                    like:
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
