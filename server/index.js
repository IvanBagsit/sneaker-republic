const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

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
	app,
};

app.use(logger);

function logger(req, res, next) {
	console.log("Request endpoint", req.originalUrl);
	next();
}

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

process.on("SIGINT", () => {
	mongoose.connection.close(() => {
		console.log("Mongoose connection closed");
		process.exit(0);
	});
});

module.exports = app;