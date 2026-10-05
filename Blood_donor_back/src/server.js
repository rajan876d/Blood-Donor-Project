import express from "express";
import config from "./config/config.js";
import UserRoutes from "./router/auth.route.js";



import connectDB from "./config/database.js";

const app = express();

connectDB();

app.use(express.json());

app.use("/user",UserRoutes);




app.listen(config.port, ()=>{
    console.log("Server running at port 8000.......");


});