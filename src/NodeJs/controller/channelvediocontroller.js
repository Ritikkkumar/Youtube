import channelvideomodel from "../model/channelvideomodel.js";

async function channelvideoscontroller(req,res){

    await channelvideomodel.find().then((data)=>{
        if(!data){
            res.status(400).send("data not found")
        }
        res.send(data);
    }).catch((err)=>{
        res.status(500).json({messege:err})
    })
}

export default channelvideoscontroller;