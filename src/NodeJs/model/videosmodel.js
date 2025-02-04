import mongoose from "mongoose";

const videoschema=new mongoose.Schema({
    title:String,
    vedioId:String,
    comments:Array,
    description:String
});

const videomodel=mongoose.model("videos",videoschema);
export default videomodel;