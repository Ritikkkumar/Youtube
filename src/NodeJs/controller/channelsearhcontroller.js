import usermodel from "../model/usermodel.js";


async function Channelsearch(req,res){

    const {id}=req.body;
    await usermodel.findOne({_id:id}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(400).json({messege:err})
    })
}

export default Channelsearch;