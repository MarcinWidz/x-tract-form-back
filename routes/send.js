const express = require("express");
const router = express.Router();
const formidableMiddleware = require("express-formidable");
router.use(formidableMiddleware());

// Models Import

const Answer = require("../models/Answer");

router.post("/send", async (req, res) => {
  console.log(req.fields);
  try {
    const newAnswer = new Answer({
      name: req.fields.name,
      last_name: req.fields.last_name,
      email: req.fields.email,
      number: req.fields.number,
    });
    await newAnswer.save();
    console.log("newAnswer:", newAnswer);
    res.json(newAnswer);
  } catch (error) {
    console.log("error:", error.message);
  }
});

module.exports = router;
