const router = require("express").Router();
const PostScheme = require("../models/post");

router.post("/", async (req, res) => {
  res.status(200).json("WORKED!");
});

module.exports = router;
