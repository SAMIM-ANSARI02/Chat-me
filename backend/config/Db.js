const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`monogo is connected :${conn.connection.host}`);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit();
  }
};
module.exports = connectDb;
