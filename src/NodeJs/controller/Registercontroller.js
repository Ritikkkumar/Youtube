import jwt from "jsonwebtoken";
import usermodel from "../model/usermodel.js";

async function Register(req,res){

    const {name,email,password,channelcreated}=req.body;
    var newuserbool=false;

    await usermodel.findOne({email:email}).then((data)=>{
        if(!data){
            newuserbool=true
        }
        else{
            res.status(400).jason({messege:"Email already exsists"})
        }
    })
    
    if(newuserbool){
        const newuser = await usermodel.create({
            name:name,
            email:email,
            password:password,
            channelcreated:channelcreated
        })
        newuser.save().then((data)=>{
            console.log(data)
        })
    
        const token=jwt.sign(name,"secret");
        res.send({token:token});
    }
    
    
}

export default Register;