import mongoose from "mongoose";
import config from "config";

async function connect() {
  const DB_URI = process.env.DB_URI;
  
  try {
    await mongoose.connect(DB_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Could not connect to db \n" + error);
  }
}

export default connect;