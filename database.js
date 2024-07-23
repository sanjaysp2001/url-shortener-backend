import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

const connectToDB = mongoose.connect(uri);
export default connectToDB;
