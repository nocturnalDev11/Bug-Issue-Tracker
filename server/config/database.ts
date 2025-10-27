import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
    if (mongoose.connection.readyState === 1) {
        console.log("🟢 MongoDB already connected");
        return;
    }

    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) throw new Error("❌ MONGO_URI not defined");

    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("🚨 MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
