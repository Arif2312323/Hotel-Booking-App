import express, { urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/user"
import userAuth from "./routes/auth"
mongoose.connect(process.env.MONGO_URL as string);
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use("/api/users", userRoutes);
app.use("/api/users",userAuth);
app.listen(3000,()=>{
    console.log("Server Started")
});