import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

// load environment variables from .env in project root
// dotenv.config() will automatically look for a .env file
dotenv.config({
    path: ".env"
});

connectDB()

  
.then(()=>{
    app.listen(process.env.port ||8000, ()=>{
        console.log(`Server is running on port ${process.env.port}`)
    })
})

.catch((error)=>{
    console.log("mongo failed connection:", error);
})

















/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

const app = express();

(async()=>{
    try{
        await mongoose.connect(`${process.env.mongodb_url}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log ("ERROR:", error)
            throw error;
        })
        app.listen(process.env.port, ()=>{
            console.log(`Server is running on port ${process.env.port}`)
        })

    } catch(error){
        console.error("ERROR:", error)
        throw error;
    }
})()
*/
