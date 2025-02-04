import { useParams } from "react-router-dom";
import "./Videodetail.css";
//import { useState } from "react";
import Videodetailside from "./Videodetailside";
import UseFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import Comment from "./comment";
import Sidebar from "./sidebar";
import userContext from "../utils/context";
import { useContext } from "react";


function Videodetail()
{
    const {sidebar,username,logedin}=useContext(userContext);
    const params=useParams();
    console.log(params.id,params.url);
    //var [list,updatelist]=useState([]);
    const {data,error,loading}=UseFetch(`http://localhost:5100/videos`);
    console.log("data",data);
    if(data){
        const filtered=data.filter((el)=>el.videoId==params.id);
        console.log("filtered",filtered);
        if(sidebar==true)
        {
            return(
                <>
                <div className="videodetailmain">
                    <Sidebar></Sidebar>
                    <div className="videoplayer">
                        <div className="player">
                            <iframe src={`https://www.youtube.com/embed/${params.id}?autoplay=1`}  height="550px" width="850px"></iframe>
                            <div className="videodetailtitle">{filtered[0].title}</div>
                            <div className="belowtitle">
                                <div className="circle"></div>
                                <div className="channelname">{filtered[0].channelName}</div>
                                <div className="subscribe">Subscribe</div>
                                <div className="likedislike">
                                    <i className="fas fa-thumbs-up"></i>
                                    <i className="fas fa-thumbs-down"></i>
                                </div>
                                <div className="share">
                                    <i className="fas fa-share"></i>
                                    <div>Share</div>
                                </div>
                                <div className="download">
                                    <i className="fas fa-arrow-down"></i>
                                    <div>Dwonload</div>
                                </div>
                                <div className="threedots">
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                            <div className="belowtitle2">
                                <div className="description">{filtered[0].description}</div>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="commentscounts">
                                <div className="counts">{filtered[0].comments.length} Comments</div>
                                <div className="sort">
                                    <i className=" fas fa-sort"></i>
                                    <div>Sort by</div>
                                </div>
                            </div>
                            <div className="addcomment">
                                <input type="text" id="add" placeholder="Add a acomment..."></input>
                                <div className="addbutton" onClick={()=>{
                                    const commentinput=document.getElementById("add");
                                    if(commentinput.value=="")
                                    {
                                        alert("Write a comment first ");
                                    }
                                    else{
                                        if(logedin==true)
                                        {
                                            fetch("http://localhost:5100/add",{
                                                method:"POST",
                                                headers:{"Content-Type":"application/json",
                                                    'Access-Control-Allow-Origin':'*',
                                                },
                                                body:JSON.stringify({
                                                    id:filtered[0].videoId,
                                                    cid:`comment${filtered[0].comments.length+1}`,
                                                    uid:username,
                                                    comment:commentinput.value,
                                                }),
                                        }).then((data)=>{console.log(data);
                                            
                                            location.reload();
                                            
                                        }).catch((err)=>console.log(err));
                                        }

                                        else{
                                            alert("SignIn or Register first")
                                        }

                                    }
        
                                    
                                }}>Add comment</div>
                            </div>
                            <div className="realcomments">
                                {
                                    filtered[0].comments.map((el)=>{
                                        return <Comment id={filtered[0].videoId} data={el}></Comment>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="videodeatailside">
                        {
                            data.map((el)=>{
                                return <Link to={`/video/${el.videoId}`}>
                                    <Videodetailside vid={filtered[0].videoId} data={el}></Videodetailside>
                                   </Link>
                                 })
                        }
                    </div>
                </div>
                </>
            )
        }
        else
        {
            return(
                <>
                <div className="videodetailmain">
        
                    <div className="videoplayer">
                        <div className="player">
                            <iframe src={`https://www.youtube.com/embed/${params.id}?autoplay=1`}  height="550px" width="850px"></iframe>
                            <div className="videodetailtitle">{filtered[0].title}</div>
                            <div className="belowtitle">
                                <div className="circle"></div>
                                <div className="channelname">{filtered[0].channelName}</div>
                                <div className="subscribe">Subscribe</div>
                                <div className="likedislike">
                                    <i className="fas fa-thumbs-up"></i>
                                    <i className="fas fa-thumbs-down"></i>
                                </div>
                                <div className="share">
                                    <i className="fas fa-share"></i>
                                    <div>Share</div>
                                </div>
                                <div className="download">
                                    <i className="fas fa-arrow-down"></i>
                                    <div>Dwonload</div>
                                </div>
                                <div className="threedots">
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                            <div className="belowtitle2">
                                <div className="description">{filtered[0].description}</div>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="commentscounts">
                                <div className="counts">{filtered[0].comments.length} Comments</div>
                                <div className="sort">
                                    <i className=" fas fa-sort"></i>
                                    <div>Sort by</div>
                                </div>
                            </div>
                            <div className="addcomment">
                                <input type="text" id="add" placeholder="Add a acomment..."></input>
                                <div className="addbutton" onClick={()=>{
                                    const commentinput=document.getElementById("add");
                                    if(commentinput.value=="")
                                    {
                                        alert("Write a comment first ");
                                    }
                                    else{
                                        if(logedin==true)
                                        {
                                            fetch("http://localhost:5100/add",{
                                                method:"POST",
                                                headers:{"Content-Type":"application/json",
                                                    'Access-Control-Allow-Origin':'*',
                                                },
                                                body:JSON.stringify({
                                                    id:filtered[0].videoId,
                                                    cid:`comment${filtered[0].comments.length+1}`,
                                                    uid:username,
                                                    comment:commentinput.value,
                                                }),
                                        }).then((data)=>{console.log(data);
                                            
                                            location.reload();
                                            
                                        }).catch((err)=>console.log(err));
                                        }

                                        else{
                                            alert("SignIn or Register first")
                                        }

                                    }
        
                                    
                                }}>Add comment</div>
                            </div>
                            <div className="realcomments">
                                {
                                    filtered[0].comments.map((el)=>{
                                        return <Comment id={filtered[0].videoId} data={el}></Comment>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="videodeatailside">
                        {
                            data.map((el)=>{
                                return <Link to={`/video/${el.videoId}`}>
                                    <Videodetailside vid={filtered[0].videoId} data={el}></Videodetailside>
                                   </Link>
                                 })
                        }
                    </div>
                </div>
                </>
            )
        }
    
    }
    
    else if(error)
        {
            return <p>Error in loading</p>
        }
    
        else if(loading)
        {
            return <p>Loading</p>
        }        
}

export default Videodetail;