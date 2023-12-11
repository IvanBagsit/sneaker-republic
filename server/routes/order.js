const express = require("express");
const router = express.Router();

// accepts "Content-Type":"multipart/form-data"
const multer = require("multer");
const sendEmail = require("../common/email");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/send-order", upload.array("attachments"), async (req, res) => {
    let shoesDetails;
    if (Array.isArray(req.body.shoes)) {
        const shoesArray = req.body.shoes.map((item) => {
            return JSON.parse(item);
        });
        shoesDetails = shoesArray.map(
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
    } else {
        const shoesArray = JSON.parse(req.body.shoes);
        shoesDetails = `Shoes: ${shoesArray.title}
        Brand: ${shoesArray.brand}
        Code: ${shoesArray.mainImage.code}
        Size: ${shoesArray.sizes.sizes} ${shoesArray.sizes.availability}
        Price: ${shoesArray.price}
        Quantity: ${shoesArray.quantity}
        Total Price: ${shoesArray.totalPrice}

        `;
    }

    const formValues = JSON.parse(req.body.formValues);

    const message = `
        Order Recieved! Please see details below:

        Customer Details
        Name: ${formValues.fullName}
        Email: ${formValues.email}
        Contact Number: ${formValues.contactNumber}
        LBC Pickup Branch: ${formValues.pickUpBranch}

        Order Details
        ${Array.isArray(req.body.shoes) ? shoesDetails.join("") : shoesDetails}
    `;

    const attachments = req.files.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
    }));

    const result = await sendEmail(message, attachments);
    res.status(result.status).send(result.message);
});

module.exports = router;
