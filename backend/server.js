const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/Db");

const app = express();
dotenv.config();
connectDb();

app.get("/chat", (req, res) => {
  res.send("my nodemon server is running");
});
const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`"server start on port" ${PORT}`));
