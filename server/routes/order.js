const express = require("express");
const router = express.Router();

router.post("/send-order", (req, res) => {
    res.send(req.body);
});

module.exports = router;
