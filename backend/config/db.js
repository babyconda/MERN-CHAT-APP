// const { config } = require("dotenv");
const { configDotenv } = require("dotenv");
const mongoose = require("mongoose");
// const colors = require("colors")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};
module.exports = connectDB;
