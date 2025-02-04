import "./channelcreate.css"
import { useState } from "react";
import userContext from "../utils/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

function Createchannel(){

    const navigate=useNavigate();
    const [profileimage,upadateprofileimage]=useState();
    const [coverimage,updatecoverimage]=useState();
    const {userid,sidebar}=useContext(userContext);
    console.log("userid",userid);
    function convertcover(e){
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result)
            updatecoverimage(reader.result);
        };
        reader.onerror=error=>{
            console.log("error",error);
        }
    }

    function convertprofile(e){
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result)
            upadateprofileimage(reader.result);
        };
        reader.onerror=error=>{
            console.log("error",error);
        }
    }

    if(sidebar){

        return(

            <>
            <div className="createmain">
                <Sidebar></Sidebar>
                <div className="createmaintwo">
                    <div className="coverimage">
                        <img src={coverimage} heigth="250px" width="1200px" className="cim"></img>
                    </div>
                    <div className="profileimage">
                        <img src={profileimage} className="pim"></img>
                    </div>
                    <div className="uploadimage">
                        <div className="upload">
                            Upload channel profile picture
                        <input type="file" id="uploadimage" accept="image/*" onChange={convertprofile}></input>
                        </div>
                        <div className="upload">
                            Upload channel cover image
                        <input type="file" id="uploadimage" accept="image/*" onChange={convertcover}></input>
                        </div>
                    </div>
    
                    <label for="name" className="nametext">Channel Name</label>
                    <input type="text"className="textinput" id="name"></input>
    
                    <label for="description" className="descriptiontext">Channel Description</label>
                    <input type="text"className="textinput" id="description"></input>
    
                    <button className="savebutton" onClick={()=>{
                    
                        const name=document.getElementById("name");
                        const description=document.getElementById("description");
    
                        if(name.value==""||description.value==""||profileimage==undefined||coverimage==undefined)
                        {
                             alert("Fill all details");
                        }
                        else
                        {
                            fetch("http://localhost:5100/newchannel",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json",
                                Accept:"application/json",
                                'Access-Control-Allow-Origin':'*',
                            },
                            body:JSON.stringify(
                                {
                                    id:userid,
                                    channel:name.value,
                                    description:description.value,
                                    coverimage:coverimage,
                                    profileimage:profileimage,
                                }
                            )
                        }).then((data)=>{
                            console.log(data);
                            navigate("/channel");
                        }).catch((err)=>{
                            console.log(err);
                        })
                        }
                        
                        
                    }}>Create Channel</button>
                </div>
            </div>
            </>
        )
    }

    else{

        return(

            <>
            <div className="createmain">
                <div className="createmaintwo">
                    <div className="coverimage">
                        <img src={coverimage} heigth="250px" width="1200px" className="cim"></img>
                    </div>
                    <div className="profileimage">
                        <img src={profileimage} className="pim"></img>
                    </div>
                    <div className="uploadimage">
                        <div className="upload">
                            Upload channel profile picture
                        <input type="file" id="uploadimage" accept="image/*" onChange={convertprofile}></input>
                        </div>
                        <div className="upload">
                            Upload channel cover image
                        <input type="file" id="uploadimage" accept="image/*" onChange={convertcover}></input>
                        </div>
                    </div>
    
                    <label for="name" className="nametext">Channel Name</label>
                    <input type="text"className="textinput" id="name"></input>
    
                    <label for="description" className="descriptiontext">Channel Description</label>
                    <input type="text"className="textinput" id="description"></input>
    
                    <button className="savebutton" onClick={()=>{
                    
                        const name=document.getElementById("name");
                        const description=document.getElementById("description");
    
                        if(name.value==""||description.value==""||profileimage==undefined||coverimage==undefined)
                        {
                             alert("Fill all details");
                        }
                        else
                        {
                            fetch("http://localhost:5100/newchannel",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json",
                                Accept:"application/json",
                                'Access-Control-Allow-Origin':'*',
                            },
                            body:JSON.stringify(
                                {
                                    id:userid,
                                    channel:name.value,
                                    description:description.value,
                                    coverimage:coverimage,
                                    profileimage:profileimage,
                                }
                            )
                        }).then((data)=>{
                            console.log(data);
                            navigate("/channel");
                        }).catch((err)=>{
                            console.log(err);
                        })
                        }
                        
                        
                    }}>Create Channel</button>
                </div>
            </div>
            </>
        )
    }
    
}

export default Createchannel;