const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/Db");
const colors = require("colors");
const UserRoutes = require("./routes/UserRoutes");
const { notFound, erroeHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDb();
const app = express();
app.use(express.json());

app.use("/api/user", UserRoutes);
app.use(notFound);
app.use(erroeHandler);
const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`"server start on port" ${PORT}`.yellow.bold));
