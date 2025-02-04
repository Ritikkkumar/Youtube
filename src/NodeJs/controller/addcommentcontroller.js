import videomodel from "../model/videosmodel.js";


async function addcomment(req,res){
    const{id,cid,uid,comment}=req.body;
    const newcomment=await videomodel.updateOne({videoId:id},{
        $push:{
            comments:{
                commentId: cid,  
                userId: uid,        
                text: comment,
                timestamp: new Date()  
            }
        }
    })

    res.send(newcomment);
}

export default addcomment;