import mongoose from "mongoose";

const db = process.env.MONGO_URL;
const connectDb = mongoose.connect(db);
export default connectDb;