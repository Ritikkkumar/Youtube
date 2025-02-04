import { useState } from "react";
import "./Home.css";
import Videoitem from "./Videoitem";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import userContext from "../utils/context";
import { useContext } from "react";
import { use } from "react";
import UseFetch from "../utils/useFetch";

function Home(){

    const {sidebar,search}=useContext(userContext);
    var [url,updateurl]=useState("http://localhost:5100/videos");
    var [videotype,updatevideotype]=useState("videos");
    console.log(url);
    //var [list,updatelist]=useState([]);
    var list=[];
    var filteredlist=[];
    var filteredlist2=[];
    const {data,error,loading}=UseFetch(url);
    // fetch("http://localhost:5100/videos").then((data1)=>{
    //                     data1.json().then((data2)=>{
    //                         //console.log(data2);
    //                         list=data2;
    //                         filteredlist=list.filter((el)=>{
    //                             return el.title.toLowerCase().includes(search.toLowerCase())
    //                         })
    //                         console.log("list",filteredlist);
    //                     })
    //                     // data1.map((el)=>{
    //                     //     return <Videoitem data={el}></Videoitem>
    //                     // })
    //                 }).catch((err)=>{
    //                     console.log(err);
    //                 })

    const [hamburg,updatehamburg]=useState(false);

    if(data){

        filteredlist=data.filter((el)=>{
            return el.title.toLowerCase().includes(search.toLowerCase());
        })
        filteredlist2=filteredlist.filter((el)=>{
            if(videotype=="videos")
            {
                return el;
            }
            else{

                return el.type==videotype;
            }
            
        })
        if(sidebar==true){
            return(
                <>
                <div className="main" >
                <Sidebar></Sidebar>
                <div className="vidios">
                    <div className="filters">
                        <div className="filteritem" onClick={()=>{
                                updatevideotype("videos");
                            }}>
                            <div className="filteritemtext">All</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("music");
                            }}>
                            <div className="filteritemtext">Music</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("lofi");
                            }}>
                            <div className="filteritemtext">Lo-Fi</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("ai");
                            }}>
                            <div className="filteritemtext">AI</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("cs");
                            }}>
                            <div className="filteritemtext">Computer Science</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("coding");
                            }}>
                            <div className="filteritemtext">Coding</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("gaming");
                            }}>
                            <div className="filteritemtext">Gaming</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("strategy");
                            }}>
                            <div className="filteritemtext">Strategies</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("JEE");
                            }}>
                            <div className="filteritemtext">JEE</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("application_software");
                            }}>
                            <div className="filteritemtext">Application Software</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("sales");
                            }}>
                            <div className="filteritemtext">Sales</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("products");
                            }}>
                            <div className="filteritemtext">Products</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("cooking");
                            }}>
                            <div className="filteritemtext">Cooking</div>
                            </div>
                    </div>
                    <div className="videolists">{
                        filteredlist2.map((el)=>{
                            return <Link to={`/video/${el.videoId}`}>
                                <Videoitem data={el}></Videoitem>
                               </Link>
                             })
                        }</div>
                </div>
                </div>
                
                </>
            )
        }
    
        else{
    
            return(
                <>
                <div className="main" >
                <div className="homeside">
                    <div className="homesidebox">
                    <i className="fas fa-home"></i>
                    <div className="homesidetext">Home</div>
                    </div>
                    <div className="homesidebox">
                    <i className="fas fa-film"></i>
                    <div className="homesidetext">Shorts</div>
                    </div>
                    <div className="homesidebox">
                    <i className="fas fa-video"></i>
                    <div className="homesidetext">Subscription</div>
                    </div>
                    <div className="homesidebox">
                    <i className="fas fa-user"></i>
                    <div className="homesidetext">You</div>
                    </div>
                    
                </div>
                <div className="vidios">
                    <div className="filters">
                    <div className="filteritem" onClick={()=>{
                                updatevideotype("videos");
                            }}>
                            <div className="filteritemtext">All</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("music");
                            }}>
                            <div className="filteritemtext">Music</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("lofi");
                            }}>
                            <div className="filteritemtext">Lo-Fi</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("ai");
                            }}>
                            <div className="filteritemtext">AI</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("cs");
                            }}>
                            <div className="filteritemtext">Computer Science</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("coding");
                            }}>
                            <div className="filteritemtext">Coding</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("gaming");
                            }}>
                            <div className="filteritemtext">Gaming</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("strategy");
                            }}>
                            <div className="filteritemtext">Strategies</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("JEE");
                            }}>
                            <div className="filteritemtext">JEE</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("application_software");
                            }}>
                            <div className="filteritemtext">Application Software</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("sales");
                            }}>
                            <div className="filteritemtext">Sales</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("products");
                            }}>
                            <div className="filteritemtext">Products</div>
                            </div>
                            <div className="filteritem" onClick={()=>{
                                updatevideotype("cooking");
                            }}>
                            <div className="filteritemtext">Cooking</div>
                            </div>
                    </div>
                    <div className="videolists">{
                        filteredlist2.map((el)=>{
                            return <Link to={`/video/${el.videoId}`}>
                                <Videoitem data={el}></Videoitem>
                               </Link>
                             })
                        }</div>
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

export default Home;