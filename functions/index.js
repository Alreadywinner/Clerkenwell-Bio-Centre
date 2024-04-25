const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const dotenv = require("dotenv");
const express = require("express");
const EmailTemplate = require("./EmailTemplate");

dotenv.config();
// admin.initializeApp();

const app = express();
app.use(cors);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  return response.status(200).json({ msg: "hello World" });
});

app.post("/send-email", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
    });
    let info = await transporter.sendMail({
      from: '"Clerkenwell Bio Centre" <nathandc90@gmail.com>', // sender address
      to: "nathandc90@gmail.com", // list of receivers
      subject: "Interested Buyer", // Subject line
      text: "Greetings ! You have a new interested Buyer for tickets", // plain text body
      html: EmailTemplate(
        "John Wick",
        "Baba Yaga",
        "https://lionsgate.brightspotcdn.com/35/72/51b31d1045a2b4593871e545ebad/john-wick-movie-bg01-portrait.jpg",
        "10$",
        `https://lockersunlocked.com/payment`
      ), // html body
    });
    res.status(200).json({
      msg: `Message sent successfully ${info.messageId}`,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

exports.app = functions.https.onRequest(app);