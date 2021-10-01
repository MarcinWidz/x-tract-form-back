const express = require("express");
const router = express.Router();

// Models Import

const Answer = require("../models/Answer");

router.get("/answer/:id", async (req, res) => {
  console.log(req.params);
  try {
    const display = await Answer.findById(req.params.id);
    console.log("display:", display);
    res.json(display);
  } catch (error) {
    console.log("error:", error.message);
  }
});

module.exports = router;
