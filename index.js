const express = require("express");
const bodyParser = require("body-parser");
const teams = require("./routes/router.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", teams);

app.get("/", (req, res) => {
  res.send("NBA Rest API");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
