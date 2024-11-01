const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to CampVerse");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
