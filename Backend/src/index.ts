import express, { urlencoded } from "express";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";
import userRoutes from "./routes/user"
import userAuth from "./routes/auth"
import morgan from "morgan";
import cookieparser from "cookie-parser";
import path from "path";
mongoose.connect(process.env.MONGO_CONNECTION_URL as string);

const app = express();
app.use(cookieparser());
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(cors(
  {
    origin : process.env.Frontend_url as string || "",
    credentials : true
  }
));

app.use(express.static(path.join(__dirname,"../../Frontend/dist")));
app.use("/api/users", userRoutes);
app.use("/api/users",userAuth);
app.listen(3000,()=>{
    console.log("Server Started")
});