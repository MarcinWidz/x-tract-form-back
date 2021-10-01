const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// Connexion à la base de donnés locale

mongoose.connect("mongodb://localhost:27017/form", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes import

const send = require("./routes/send");
app.use(send);
const fetch = require("./routes/fetch");
app.use(fetch);
const restart = require("./routes/restart");
app.use(restart);

// In case url doesn't exist

app.all("/*", (req, res) => res.json("Page not found"));

app.listen(4000, () => {
  console.log("Server has started");
});
