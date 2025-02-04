import videomodel from "../model/videosmodel.js";


async function removecomment(req,res){

    const{id,cid}=req.body;
    const removed=await videomodel.updateOne({videoId:id},{$pull:{
        comments:{commentId:cid}
    }})

    res.send(removed);
}

export default removecomment;