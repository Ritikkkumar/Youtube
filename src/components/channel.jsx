import "./channel.css"
import Videoitem from "./Videoitem";
import UseFetch from "../utils/useFetch";
import Sidebar from "./sidebar";
import userContext from "../utils/context.js";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Channel(){

    const {sidebar,userid}=useContext(userContext);
    console.log("id",userid);
    const [channeldata,updatechanneldata]=useState({});
    const {data,error,loading}=UseFetch("http://localhost:5100/channelvideos");
    //let channel2={};
   
    //console.log(data);
    if (data){
        
        fetch("http://localhost:5100/channelsearch",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify(
                {
                    id:userid
                }
            )
        }).then((data)=>{
            data.json().then((el)=>{
                updatechanneldata(el.channels[0]);
                console.log("channeldata",channeldata);
                
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        })
        if(sidebar==true)
        {
            return(
                <>
                <div className="mainmain">
                    <Sidebar></Sidebar>
                <div className="channelmain">
                    <div className="channelmaintwo">
                    <div className="coverimagediv">
                        <img className="coverimagetwo" src={channeldata.coverimage}></img>
                    </div>
                    <div className="profilediv">
                        <div className="profileimagediv">
                        <img className="profileimagetwo" src={channeldata.profileimage}></img>
                        </div>
                        <div className="details">
                            <h1>{channeldata.channelname}</h1>
                            <h2>{channeldata.description}</h2>
                            <div className="subscribebutton">Subscribe</div>
                        </div>
                    </div>
                    <div className="categories">
                        <div className="categorytype">Home</div>
                        <div className="categorytype">Videos</div>
                        <div className="categorytype">Shorts</div>
                        <div className="categorytype">Live</div>
                        <div className="categorytype">Playlist</div>
                        <div className="categorytype">Community</div>
                    </div>
                    <hr></hr>
                    <div className="videosdiv">
                        {
                            data.map((el)=>{
                               return <Link to={`/channeldetails/:${el.videoId}`}>
                                 <Videoitem data={el}></Videoitem>
                                </Link>
                            })
                        }
                    </div>
                    </div>
                   
                </div>
                </div>
                
                </>
            )
        }
        else{

            return(
                <>
                <div className="mainmain">
                <div className="channelmain">
                    <div className="channelmaintwo">
                    <div className="coverimagediv">
                    <img className="coverimagetwo" src={channeldata.coverimage}></img>
                    </div>
                    <div className="profilediv">
                        <div className="profileimagediv">
                        <img className="profileimagetwo" src={channeldata.profileimage}></img>
                        </div>
                        <div className="details">
                        <h1>{channeldata.channelname}</h1>
                        <h2>{channeldata.description}</h2>
                        <div className="subscribebutton">Subscribe</div>
                        </div>
                    </div>
                    <div className="categories">
                        <div className="categorytype">Home</div>
                        <div className="categorytype">Videos</div>
                        <div className="categorytype">Shorts</div>
                        <div className="categorytype">Live</div>
                        <div className="categorytype">Playlist</div>
                        <div className="categorytype">Community</div>
                    </div>
                    <hr></hr>
                    <div className="videosdiv">
                        {
                            data.map((el)=>{
                                return <Link to={`/channeldetails/${el.videoId}`}>
                                <Videoitem data={el}></Videoitem>
                               </Link>
                            })
                        }
                    </div>
                    </div>
                   
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
export default Channel;