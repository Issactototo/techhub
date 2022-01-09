const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const { redisClient } = require("../Database");
const { template } = require("./template");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAILUSER,
    pass: process.env.GMAILPASSWORD,
  },
});

router.post("/acceptUser", async function (req, res) {
  
  const newId = uuid.v4();
  console.log("newId");
  console.log(newId);
  redisClient.set(newId, "bar", "EX", 1, (err, reply) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    //  else {
    //   res.status(200).send(reply);
    // }
  });
  // redisClient.get(newId).then(function (result) {
  //   console.log(result); // Prints "bar"
  // });
  const mailOptions = {
    from: process.env.gmailUser,
    to: "tototototoman@gmail.com",
    subject:
      "[Action required] Congratulations! You have been accepted to TECHHUBHK.",
    text: "We are happy to share that you are accepted to become one of the content creator at TECHHUBHK. Please click here to set your password. I am so excited!",
    html: template({ username: "Issac", link: `http://localhost:3000/setPassword/${newId}` }),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent: " + info.response);
    }
  });
});

router.post("/generateEmail", async function (req, res) {
  
});

module.exports = router;
