import videomodel from "../model/videosmodel.js";


async function editcomment(req,res){

    const{id,cid,comment}=req.body;
    //await videomodel.updateOne({videoId:id,"comments.commentId":cid},{$set:{"comments.$.text":comment}});
    console.log(id,cid,comment);
    await videomodel.updateOne(
        { 
          videoId: id, 
          "comments.commentId": cid
        },
        { 
          $set: { "comments.$.text": comment } 
        }
      );
    const video=await videomodel.findOne({videoId:id});
    res.send(video);

}
export default editcomment;