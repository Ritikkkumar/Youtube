import channelvideomodel from "../model/channelvideomodel.js";

async function Updatevideocontroller(req,res){

    const{id,name,description}=req.body;
    await channelvideomodel.updateOne({videoId:id},{$set:{
        title:name,
        description:description
    }}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    })

}

export default Updatevideocontroller;