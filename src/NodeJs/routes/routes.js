import videoscontroller from "../controller/videoscontroller.js"
import editcomment from "../controller/editcommentcontroller.js";
import addcomment from "../controller/addcommentcontroller.js";
import removecomment from "../controller/removecommentcontroller.js";
import Register from "../controller/Registercontroller.js";
import Signin from "../controller/signincontroller.js";
import lofivideoscontroller from "../controller/lofivideocontroller.js";
import Newchannel from "../controller/newchannelcontroller.js";
import Channelsearch from "../controller/channelsearhcontroller.js";
import channelvideoscontroller from "../controller/channelvediocontroller.js";
import Updatevideocontroller from "../controller/updatevideocontroller.js";
import Deletevideo from "../controller/removevideocontroller.js";
import Emailfunction from "../controller/emailfetchcontroller.js";

function routes(app){
    app.get("/videos",videoscontroller);
    app.get("/lofivideos",lofivideoscontroller);
    app.put("/edit",editcomment);
    app.post("/add",addcomment);
    app.put("/remove",removecomment);
    app.post("/register",Register);
    app.post("/signin",Signin);
    app.post("/newchannel",Newchannel);
    app.post("/channelsearch",Channelsearch);
    app.get("/channelvideos",channelvideoscontroller);
    app.put("/updatevideo",Updatevideocontroller);
    app.put("/deletevideo",Deletevideo);
    app.post("/emailfetch",Emailfunction);
}

export default routes;