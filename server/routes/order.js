const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_KEY,
        pass: process.env.EMAIL_APP_KEY,
    },
});

router.post("/send-order", (req, res) => {
    const { shoes, formValues, attachments } = req.body.orderDetails;

    const shoesDetails = shoes.map(
        (item) =>
            `Shoes: ${item.title}
        Brand: ${item.brand}
        Code: ${item.mainImage.code}
        Size: ${item.sizes.sizes} ${item.sizes.availability}
        Price: ${item.price}
        Quantity: ${item.quantity}
        Total Price: ${item.totalPrice}

        `
    );

    const message = `
        Order Recieved! Please see details below:

        Customer Details
        Name: ${formValues.fullName}
        Email: ${formValues.email}
        Contact Number: ${formValues.contactNumber}
        LBC Pickup Branch: ${formValues.pickUpBranch}
        
        Order Details
        ${shoesDetails.join("")}
    `;

    const mailOptions = {
        from: process.env.EMAIL_KEY,
        to: "ivanbagsit23@gmail.com",
        subject: "ORDER - Sneakers Republic",
        text: message,
        attachments: [...attachments],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error.toString());
            res.status(500).send(error.toString());
        } else {
            console.log("Email sent: ", info);
            res.status(200).send("Email sent: " + info.response);
        }
    });
});

module.exports = router;
