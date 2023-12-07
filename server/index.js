const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// this loads the variables from the .env file into process.env
require("dotenv").config();

const app = express();

// to accept cors
app.use(cors());

// to get the images in 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// middleware for requests with body of x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// middleware for requests with body of (raw JSON)
app.use(express.json());

// set view engine for server side rendering - htmls/ejs/pug
app.set("view engine", "ejs");

// mongodb connection
mongoose.connect(process.env.MONGO_ATLAS_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "sneakers-republic",
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB Atlas");
});

module.exports = {
    mongoose,
};

// if you want to use logger in all api
app.use(logger);

// another middleware
function logger(req, res, next) {
    // console.log is like log4j in java
    console.log("Request endpoint", req.originalUrl);
    next();
}

// do this if you want to specify an api to apply specific middleware
app.get("/app", logger, (req, res) => {
    res.send("this is app.get");
});

const testRouter = require("./routes/test.js");
const homeRouter = require("./routes/home.js");
const viewRouter = require("./routes/view.js");
const viewAllRouter = require("./routes/viewAll.js");
const orderRouter = require("./routes/order.js");
const databaseRouter = require("./routes/database.js");

app.use("/test", testRouter);
app.use("/home", homeRouter);
app.use("/view-all", viewAllRouter);
app.use("/view", viewRouter);
app.use("/order", orderRouter);
app.use("/db", databaseRouter);

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`server is running in port ${PORT}`));

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose connection closed");
        process.exit(0);
    });
});
