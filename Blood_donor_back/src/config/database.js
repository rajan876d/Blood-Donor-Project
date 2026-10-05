import mongoose from "mongoose";
import  config  from "./config.js";

async function connectDB (){
    try {
      await mongoose.connect(config.mongoos_url);
      console.log("Database is connected");  
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;