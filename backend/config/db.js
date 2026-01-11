import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.coonect("mongodb://127.0.0.1:27017/sheskill");
        console.log("MongoDB connected");
    } catch (error){
        console.error(error);
        process.exit(1);
    }
};

export default connectionDB;

                       