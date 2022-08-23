const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jaserino1@gmail.com",
    pass: process.env.REACT_APP_GMAIL_PASSWORD,
  },
});

// verifies if server is running

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/contact", (req, res) => {
  const fname = req.body.fullName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const mail = {
    from: fname,
    to: "jaserino1@gmail.com",
    subject: "Portfolio form submission",
    html: `<p>Name: ${fname}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
