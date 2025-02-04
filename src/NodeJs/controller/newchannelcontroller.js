import usermodel from "../model/usermodel.js";

async function Newchannel(req,res){
    const {id,channel,description,coverimage,profileimage}=req.body;
    await usermodel.updateOne({_id:id},{$push:{channels:{
        channelname:channel,
        description:description,
        coverimage:coverimage,
        profileimage:profileimage
    }}}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err);
    })

    await usermodel.updateOne({_id:id},{$set:{channelcreated:true}}).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })

}

export default  Newchannel;