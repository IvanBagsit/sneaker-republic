const nodemailer = require("nodemailer");

const sendEmail = async (message, subject, attachments) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_KEY,
            pass: process.env.EMAIL_APP_KEY,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_KEY,
        to: process.env.EMAIL_RECEIVER,
        subject: subject,
        text: message,
        attachments: attachments,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info);
        return {
            status: 200,
            message: "Email sent: " + info.response,
        };
    } catch (error) {
        console.error(error.toString());
        return {
            status: 500,
            message: error.toString(),
        };
    }
};

module.exports = sendEmail;
