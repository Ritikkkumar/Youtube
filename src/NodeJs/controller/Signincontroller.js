import jwt from "jsonwebtoken"
import usermodel from "../model/usermodel.js"

async function Signin(req,res){
    const {email,password}=req.body;

    await usermodel.findOne({email:email}).then((data)=>{
        if(!data){
            res.status(401).json({mwssege:"Invalid credentials"})
        }
        else if(data.password!=password){
            res.status(401).json({mwssege:"Invalid credentials"})
        }
        else{
            const token=jwt.sign(email,"secret");
            res.send({token:token,name:data.name,_id:data._id})
        }
    }).catch((err)=>{
        res.status(400).send(err);
    })
}

export default Signin;