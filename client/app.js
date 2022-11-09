const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.get("/posts", async (req, res) => {
  res.render("../views/posts/index");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}`);
});
