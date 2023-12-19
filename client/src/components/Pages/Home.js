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
import { useEffect, useState } from "react";

import gmailIcon from "../../images/contact/gmailIcon.png";
import facebookIcon from "../../images/contact/facebookIcon.png";
import instagramIcon from "../../images/contact/instagramIcon.png";
import ownerImage from "../../images/owner/owner.jpg";
import DeviceChecker from "../Common/DeviceChecker.js";
import client from "../Common/ApiClient.js";
import FullPageLoader from "../Common/FullPageLoader.js";
import BufferToURI from "../Common/BufferToURI.js";

const Home = ({ isGetStartedClosed }) => {
    const [featuredShoes, setFeaturedShoes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const callFeaturedShoes = async () => {
        setIsLoading(true);
        await client
            .get("/home/featured")
            .then((item) => {
                const { data } = item;
                if (data) {
                    setFeaturedShoes(data);
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        callFeaturedShoes();
    }, []);

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
                width: "15vh",
                flex: 1,
            };
        } else {
            return {
                width: "23vw",
                flex: 1,
            };
        }
    };

    const cardDimension = () => {
        if (device === "desktop") {
            return {
                display: "flex",
                height: "23vh",
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
            direction={`${device === "desktop" ? "column" : "row"}`}
            justifyContent="flex-start"
            alignItems="flex-end"
            className={styles.mainBackground}
        >
            {isLoading && isGetStartedClosed && (
                <FullPageLoader
                    open={isLoading}
                    message={"Please wait while we load the contents..."}
                />
            )}
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
                        {featuredShoes?.map((items) => {
                            return (
                                <Card key={items.title} sx={cardDimension()}>
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
                                                {items.title}
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
                                                ₱{items.price}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Link to={`/view?shoes=${items.url}`}>
                                        <CardMedia
                                            component="img"
                                            sx={featuredImageDimension()}
                                            image={BufferToURI(
                                                items.mainImage.content.data,
                                                items.mainImage.type
                                            )}
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
                                className={styles.owner}
                            />
                        </div>
                        <div
                            className={`${styles.contentItem} ${styles.contentDetails}`}
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
