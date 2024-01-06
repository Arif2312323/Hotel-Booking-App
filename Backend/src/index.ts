import express, { urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/", async (req,res)=>{
    res.json({
        message : "Hi"
    })
})

app.listen(3000,()=>{
    console.log("Server Started")
});