import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connection Successful!");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.error("Error details:", error.message);
  }
};

export default dbConnect;
