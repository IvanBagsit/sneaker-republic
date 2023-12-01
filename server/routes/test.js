const express = require("express");
const router = express.Router();

router.get("/send", (req, res) => {
    console.log("this is like logger");
    res.send("sending...");
});

router.get("/json", (req, res) => {
    res.status(200).json({ message: "HELLO" });
});

router.get("/download", (req, res) => {
    const fileLink = "./server.js";
    res.download(fileLink);
});

// rendering html - server side rendering
// requires app.set("view engine", "ejs"); on the parent
router.get("/render", (req, res) => {
    // need a view engine like ejs or pug
    // npm i ejs
    // render() is looking for 'views' folder
    // can be render(file) only
    const file = "index.ejs";
    res.render(file, { text: "HELLO WORLD" });
});

const users = [
    { name: "kyle", age: 13 },
    { name: "sally", age: 18 },
];

// use .route() if have apis that has the same endpoint like above 3
router
    .route("/method/:value")
    .post((req, res) => {
        const value = req.params.value;
        const body = req.body;
        const sampleJson = {
            name: body.name,
            age: body.age,
        };
        users.push(sampleJson);
        console.log(value);
        res.send("posting of new user done");
    })
    .put((req, res) => {
        const value = req.params.value;
        res.send(`User put param: ${value}`);
    })
    .delete((req, res) => {
        const value = req.params.value;
        res.send(`User delete param: ${value}`);
    });

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const sampleJson = {
        id: `the id passed is ${id}`,
        user: req.user,
    };
    res.send(sampleJson);
});

// query string
router.get("/", (req, res) => {
    const name = req.query.name;
    const user = users.find((user) => user.name === name.toLowerCase());
    if (user) {
        res.send(user);
    } else {
        res.send("No existing user");
    }
});

// middleware - runs between request from client and response from server
// in this case when line 45 is triggered this code will run first than line 45
// because they both have "id" as a param
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    console.log(req.user);
    // next() will run the next line of code which is in line 45
    next();
});

module.exports = router;
