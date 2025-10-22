import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();//Process enviroment variables to a readable format and passes them to "process.env". Its like a key used to unlocks env keys.

async function initDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI) //establishes database connection by using the connection string in the .env... ".connect" key words is used and "process.env".
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.log({Error: error, Message: "Could not establish database handshake"})
    }
}

export default initDb;