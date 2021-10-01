const express = require("express");
const router = express.Router();

// Models Import

const Answer = require("../models/Answer");

router.delete("/delete/:id", async (req, res) => {
  console.log(req.params);
  try {
    await Answer.findOneAndDelete({ _id: req.params.id });
    res.json("answer deleted");
  } catch (error) {
    console.log("error:", error.message);
  }
});

module.exports = router;
