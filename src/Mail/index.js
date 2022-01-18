const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const { redisClient } = require("../Database");
const {
  forgotPasswordMailTemplate,
  acceptedMailTemplate,
} = require("./template");
const { deletePendingUser } = require("../functions/Oracle");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAILUSER,
    pass: process.env.GMAILPASSWORD,
  },
});

router.post("/verifyId/:id", async function (req, res) {
  try {
    redisClient.get(req.params.id).then(function (result) {
      if (result == null) {
        res.status(201).send(false);
        return;
      }
      res.status(201).send(result);
    });
  } catch {
    console.log("HIHI");
    res.status(501).send(result);
  }
});

router.post("/acceptUser/:email/:username", async function (req, res) {
  const newId = uuid.v4();
  const userInfo = JSON.stringify({
    email: req.params.email,
    username: req.params.username,
  });
  console.log(userInfo);
  redisClient.set(newId, userInfo, "EX", 24 * 60 * 60 *3, (err, reply) => {
    if (err) {
      console.log("REDIS ERROR");
      res.status(500).send(err);
      return;
    }
  });
  const mailOptions = {
    from: process.env.gmailUser,
    to: req.params.email,
    subject:
      "[Action required] Congratulations! You have been accepted to TECHHUBHK.",
    text: "We are happy to share that you are accepted to become one of the content creator at TECHHUBHK. Please click here to set your password. I am so excited!",
    html: acceptedMailTemplate({
      username: req.params.username,
      link: `http://techhubhk.netlify.app/setPassword/${newId}`,
    }),
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

router.post("/generateEmail", async function (req, res) {});

module.exports = router;
