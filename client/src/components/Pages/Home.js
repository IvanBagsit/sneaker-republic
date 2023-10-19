import {
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    CardMedia,
} from "@mui/material";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import AF1 from "../../images/shoes/Nike/AF1/Unisex 1.JPG";
import J1 from "../../images/shoes/Nike/J1/Unisex 2.JPG";
import J3 from "../../images/shoes/Nike/J3/Men size.JPG";

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
                    <div className={styles.content}>Image List</div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Home;
