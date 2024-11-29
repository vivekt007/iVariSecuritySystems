const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: "gmail", // or any email service you want
    auth: {
        user: "iamsafe@ivari.in", // Replace with your email
        pass: "pass", // Replace with your email password
    },
});

// POST route for handling form submission
app.post("/send-message", (req, res) => {
    const { contactName, emailId, contactMessage } = req.body;

    const mailOptions = {
        from: emailId,
        to: "iamsafe@ivari.in", // Replace with your email
        subject: `New Contact Form Submission from ${contactName}`,
        text: `Message from: ${contactName}\n\nEmail: ${emailId}\n\nMessage:\n${contactMessage}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send("Error sending email: " + error);
        }
        res.status(200).send("Message sent: " + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
