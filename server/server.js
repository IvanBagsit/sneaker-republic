const express = require("express");
const app = express();

// middleware for requests with body of x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// middleware for requests with body of (raw JSON)
app.use(express.json());
app.set("view engine", "ejs");

// if you want to use logger in all api
// app.use(logger);

// another middleware
function logger(req, res, next) {
    // console.log is like log4j in java
    console.log(req.originalUrl);
    next();
}

// logger here if you want to specify an api to apply logger
app.get("/app", logger, (req, res) => {
    res.send("this is app.get");
});

const testRouter = require("./routes/test.js");

app.use("/test", testRouter);

app.listen(3000);
