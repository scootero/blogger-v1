const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postsRoute = require("./api/routes/posts");
dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongoDB."))
  .catch((err) => console.log("Error connecting to mongoDB: ", err));

app.use("/api/post", postsRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}`);
});
