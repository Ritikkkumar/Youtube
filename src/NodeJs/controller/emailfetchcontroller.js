import usermodel from "../model/usermodel.js";

async function Emailfunction(req,res){

    const {email}=req.body;
    await usermodel.findOne({email:email}).then((data)=>{
        res.status(200).json({id:data._id,channelcreated:data.channelcreated});
    }).catch((err)=>{
        res.send(err);
    })
}

export default Emailfunction;