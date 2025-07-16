const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = process.env.MONGODB;

const connectToDatabase = async () => {
  await mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database is connected");
    })
    .catch((error) => console.log("Error in connecting Database", error));
};
module.exports = { connectToDatabase };
