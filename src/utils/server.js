import express from "express";
import mongoose from "mongoose";
import routes from "../NodeJs/routes/routes.js";
import cors from "cors"
//import bodyParser from "body-parser";

const app=new express();
mongoose.connect("mongodb://localhost:27017")

app.listen(5100,()=>{
    console.log("Running");
})
//app.use(express.json());
app.use(cors({origin:'*'}));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));

routes(app);