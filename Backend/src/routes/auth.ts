import express,{Request,Response} from "express";
import { check, validationResult} from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/user";
import bcrypt from "bcryptjs";
import { register } from "module";
import verifytoken from "../middlewares/auth";
const router = express.Router();

router.post("/login", [
    check("email","valid email is required").isEmail(),
    check("password", "invalid").isLength({min:6})
], async (req : Request, res : Response)=>{
    const error = validationResult(req);
    console.log(req.body);
    if(!error.isEmpty())
    {
        return res.status(400).json({
            message : "Invalid inputs"
        })
    }
    try{
        const user = await User.findOne({email : req.body.email});
        if(!user)
        {
            return res.json({
                message : "user does not exist"
            })
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match)
        {
            return res.json({
                message : "Invalid creditianals"
            })
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET_KEY as string,
            {
              expiresIn: "1d",
            }
        );

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        })
        console.log(res.cookie);
        res.status(200).json({ userId: user._id });
    }
    catch(e){
        console.log(e);
        return res.status(404).json({
            message : "Error"
        })
    }
})

router.post("/logout", (req,res)=>{
    res.cookie("auth_token", "", {
        expires : new Date(0),
    })
    res.send(200);
});

router.get("/validate", verifytoken , (req,res)=>{
    res.status(200).send({userId : req.userId});
})
export default router;