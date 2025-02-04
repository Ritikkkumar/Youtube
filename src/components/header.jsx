import "./header.css"
import userContext from "../utils/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";



function Header(){

    const navigate=useNavigate();
    const {sidebar,updatesidebarham,logedin,username,updatesearch,search,userid}=useContext(userContext);
    console.log(sidebar,updatesidebarham);
    const [created,updatecreated]=useState();
    
    if(logedin==false)
    {
        return(
            <>
            <div className="headermain">
                <i className="fas fa-bars" onClick={()=>{
                    updatesidebarham(!sidebar);
                }}></i>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" height="50px" width="100px"></img>
                <div className="searchinput">
                <input type="text" className="search" placeholder="Serach" id="searchinput"></input>
                <div className="searchicon" onClick={()=>{
                    const searchinput=document.getElementById("searchinput")
                    updatesearch(searchinput.value);
                    console.log(search);
                    navigate("/");
                }}>
                    <i className="fas fa-search" ></i>
                </div>
                </div>
                <div className="mic">
                    <i  className="fas fa-mic"></i>
                </div>
                <div className="headersign" onClick={()=>{
                    navigate("/signin")
                }}>Sign In</div>
                
            </div>
            </>
        )
    }

    else{

        fetch("http://localhost:5100/channelsearch",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                            'Access-Control-Allow-Origin':'*',
            },
            body:JSON.stringify({
                id:userid,
            })
        }).then((data)=>{
            data.json().then((el)=>{
                updatecreated(el.channelcreated);
                //console.log("created",created);
            })
        }).catch((err)=>{
            console.log(err);
        })
        if(created==true)
        {
            console.log("created",created);
            return(
                <>
                <div className="headermain">
                    <i className="fas fa-bars" onClick={()=>{
                        updatesidebarham(!sidebar);
                    }}></i>
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" height="50px" width="100px"></img>
                    <div className="searchinput">
                    <input type="text" className="search" placeholder="Serach" id="searchinput"></input>
                    <div className="searchicon" onClick={()=>{
                        const searchinput=document.getElementById("searchinput")
                        updatesearch(searchinput.value);
                        console.log(search);
                        navigate("/");
                    }}>
                        <i className="fas fa-search"></i>
                    </div>
                    </div>
                    <div className="mic">
                        <i  className="fas fa-mic"></i>
                    </div>
                    <i className="fas fa-arrow-up" id="arrow"></i>
                    <i className="fas fa-bell"></i>
                    <Link to={"/channel"}>
                    <div className="profile">{username}</div>
                    </Link>
                </div>
                </>
            )
        }
        else{
            console.log("created",created);
            return(
                <>
                <div className="headermain">
                    <i className="fas fa-bars" onClick={()=>{
                        updatesidebarham(!sidebar);
                    }}></i>
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" height="50px" width="100px"></img>
                    <div className="searchinput">
                    <input type="text" className="search" placeholder="Serach" id="searchinput"></input>
                    <div className="searchicon" onClick={()=>{
                        const searchinput=document.getElementById("searchinput")
                        updatesearch(searchinput.value);
                        console.log(search);
                        navigate("/");
                    }}>
                        <i className="fas fa-search"></i>
                    </div>
                    </div>
                    <div className="mic">
                        <i  className="fas fa-mic"></i>
                    </div>
                    <i className="fas fa-arrow-up" id="arrow"></i>
                    <i className="fas fa-bell"></i>
                    <Link to={"/addchannel"}>
                    <div className="profile">{username}</div>
                    </Link>
                </div>
                </>
            )
        }
    }
}

export default Header;