import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    photo:String,
    channels:Array,
    channelcreated:Boolean
});

const usermodel=mongoose.model("users",userschema);

export default usermodel;