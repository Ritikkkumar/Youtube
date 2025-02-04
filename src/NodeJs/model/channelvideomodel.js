import mongoose from "mongoose";

const videoschema=new mongoose.Schema({
    title:String,
    vedioId:String,
    comments:Array,
    description:String
});

const channelvideomodel=mongoose.model("channelvideos",videoschema);
export default channelvideomodel;