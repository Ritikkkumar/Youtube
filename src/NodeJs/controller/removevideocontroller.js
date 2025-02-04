import channelvideomodel from "../model/channelvideomodel.js";

async function Deletevideo(req,res) {

    const {id}=req.body;

    await channelvideomodel.deleteOne({videoId:id}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err);
    })
    
}

export default Deletevideo;