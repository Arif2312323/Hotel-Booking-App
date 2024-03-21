import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRoutes from "./routes/user"
import userAuth from "./routes/auth"
import morgan from "morgan";

dotenv.config();
mongoose.connect(process.env.MONGO_URL as string);
const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    // Allow any origin to access your resources (replace '*' with your specific origin)
    res.header('Access-Control-Allow-Origin', '*');
  
    // Allow specific headers in the request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
    // Allow specific HTTP methods
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
    // Allow credentials (cookies, authorization headers, etc.)
    res.header('Access-Control-Allow-Credentials', 'true');
  
    // Continue to the next middleware or route handler
    next();
  });

app.use("/api/users", userRoutes);
app.use("/api/users",userAuth);
app.listen(3000,()=>{
    console.log("Server Started")
});