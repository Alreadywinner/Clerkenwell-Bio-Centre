const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
// admin.initializeApp();

const app = express();
app.use(cors);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  return response.status(200).json({ msg: "hello World" });
});

exports.app = functions.https.onRequest(app);
