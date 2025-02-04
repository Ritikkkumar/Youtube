import lofivideomodel from "../model/lofivideomodel.js";

async function lofivideoscontroller(req,res){

    await lofivideomodel.find().then((data)=>{
        if(!data){
            res.status(400).send("data not found")
        }
        res.send(data);
    }).catch((err)=>{
        res.status(500).json({messege:err})
    })
}

export default lofivideoscontroller;