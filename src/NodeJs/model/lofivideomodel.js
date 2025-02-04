import mongoose from "mongoose";

const videoschema=new mongoose.Schema({
    title:String,
    vedioId:String,
    comments:Array
});

const lofivideomodel=mongoose.model("lofivideos",videoschema);
export default lofivideomodel;