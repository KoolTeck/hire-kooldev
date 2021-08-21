const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/", (req, res, next) => {
  res.render("KoolDevResume");
});

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);
  try {
    const contact = new Contact({
      name: name,
      email: email,
      message: message,
    });
    if (await contact.save()) {
      console.log(contact, "saved");
      req.session.contact = contact;
      res.redirect("/response");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/response", (req, res) => {
  const messenger = req.session.contact;
  res.render("Response", { messenger });
});

module.exports = router;
