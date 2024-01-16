import mongoose from "mongoose";

export type userType = {
    _id : string;
    email : string;
    password : string;
    firstname : string;
    lastname : string;
}

const userSchema = new mongoose.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String,required : true},
    firstname : {type : String,required : true},
    lastname : {type : String,required : true},
})

const User = mongoose.model<userType>("User",userSchema);
export default User;