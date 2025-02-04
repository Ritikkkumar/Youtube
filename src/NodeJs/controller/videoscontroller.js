import videomodel from "../model/videosmodel.js";

async function videoscontroller(req,res){

    await videomodel.find().then((data)=>{
        if(!data){
            res.status(400).send("data not found")
        }
        res.send(data);
    }).catch((err)=>{
        res.status(500).json({messege:err})
    })
}

export default videoscontroller;