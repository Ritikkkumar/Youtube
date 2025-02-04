import "./signup.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../utils/context";
import { useContext } from "react";
import mongoose from "mongoose";
import usermodel from "../NodeJs/model/usermodel.js";
import Sidebar from "./sidebar.jsx";


function Signup(){

    const [change,updatechange]=useState(false);
    const navigate=useNavigate();
    const {isloggedin,updateisloggedin,updateusername,updateuserid,sidebar}=useContext(userContext);

    if(sidebar)
    {
        if(change==false)
            {
                return(
                    <>
                    <div className="signmainmain">
                        <Sidebar></Sidebar>
                    <div className="signmaincontainer">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" height="100px" width="200px"></img>
                    <div className="signmain">
                    
                        <div className="signtitle">Sign Up</div>
                        <div className="signtext">Email</div>
                        <input type="email" className="signinput" id="signinemail"></input>
                        <div className="signtext">Password</div>
                        <input type="password" className="signinput" id="signinpassword"></input>
                        <button className="signbutton" onClick={()=>{
                            const signinemail=document.getElementById("signinemail");
                            const signinpassword=document.getElementById("signinpassword");
                            
                            fetch("http://localhost:5100/signin",{
                                method:"POST",
                                headers:{
                                    "Content-Type":"application/json",
                                    'Access-Control-Allow-Origin':'*',
                                },
                                body:JSON.stringify(
                                    {
                                        email:signinemail.value,
                                        password:signinpassword.value,
                                    }
                                )
                            }).then((data)=>{
                                if(data){
                                    if(data.status==200)
                                    {
                                        data.json().then((el)=>{
                                            localStorage.setItem("token",el.token);
                                            updateisloggedin(true);
                                            updateusername(el.name);
                                            updateuserid(el._id)
                                        })
                                        navigate("/");
                                    }
                                    else{
                                        alert("invalid credentials")
                                    }
                                }
                            }).catch((err)=>{
                                console.log(err);
                                alert(err);
                            })
                            
                        }}>Sign In</button>
                    </div>
                    <div className="registertext" onClick={()=>{
                        updatechange(!change);
                    }}>Dont have a account? Register</div>
                    </div>
                    </div>
                    </>
                )
            }
        
            else
            {
                return(
                    <>
                    <div className="signmainmain">
                        <Sidebar></Sidebar>
                    <div className="signmaincontainer">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" height="100px" width="200px"></img>
                    <div className="signmain">
                    
                        <div className="signtitle2">Register</div>
                        <div className="signtext">Name</div>
                        <input type="text" className="signinput" id="registername"></input>
                        <div className="signtext">Email</div>
                        <input type="email" className="signinput" id="registeremail"></input>
                        <div className="signtext">Password</div>
                        <input type="password" className="signinput" id="registerpassword"></input>
                        <button className="signbutton" onClick={()=> {
                            const registeremail=document.getElementById("registeremail");
                            const registerpassword=document.getElementById("registerpassword");
                            const registername=document.getElementById("registername");
                            console.log("name",registeremail);
                            if(registeremail.value!=""&&registerpassword.value!=""&&registeremail.value!="")
                            {
                                fetch("http://localhost:5100/register",{
                                    method:"POST",
                                    headers:{
                                        "Content-Type":"application/json",
                                        'Access-Control-Allow-Origin':'*',
                                    },
                                    body:JSON.stringify(
                                        {
                                            email:registeremail.value,
                                            password:registerpassword.value,
                                            name:registername.value,
                                            channelcreated:false
                                        }
                                    )
                                }).then((data)=>{
                                    if(data){
                                        if(data.status==200)
                                        {
                                            data.json().then((el)=>{
                                                localStorage.setItem("token",el.token);
                                                updateisloggedin(true);
                                                updateusername(registername.value)
                                            })
            
                                            fetch("http://localhost:5100/emailfetch",{
                                                method:"POST",
                                                headers:{"Content-Type":"application/json",
                                        },
                                        body:JSON.stringify({
                                            email:registeremail.value,
                                        })
                                            }).then((datatwo)=>{
                                                console.log(registeremail.value);
                                                datatwo.json().then((el)=>{
                                                    console.log("el",el);
                                                    updateuserid(el.id)
                                                })}).catch((errtwo)=>{
                                                console.log(errtwo);
                                            })
                                            
                                                navigate("/");
                                            
                                            
                                        }
                                        else if(data.status==400){
                                            alert("Email already exists")
                                        }
                                    }
                                }).catch((err)=>{
                                    console.log(err);
                                    alert(err);
                                })
                            }

                            else{
                                alert("Fill all values");
                            }
                            
                            
                        }}>Register</button>
                    </div>
                    <div className="registertext" onClick={()=>{
                        updatechange(!change);
                    }}>Already have a account? Sign In</div>
                    </div>
                    </div>
                    </>
                )
            }
    }
    else{
        if(change==false)
            {
                return(
                    <>
                    
                        
                    <div className="signmaincontainer">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" height="100px" width="200px"></img>
                    <div className="signmain">
                    
                        <div className="signtitle">Sign Up</div>
                        <div className="signtext">Email</div>
                        <input type="email" className="signinput" id="signinemail"></input>
                        <div className="signtext">Password</div>
                        <input type="password" className="signinput" id="signinpassword"></input>
                        <button className="signbutton" onClick={()=>{
                            const signinemail=document.getElementById("signinemail");
                            const signinpassword=document.getElementById("signinpassword");
                            
                            fetch("http://localhost:5100/signin",{
                                method:"POST",
                                headers:{
                                    "Content-Type":"application/json",
                                    'Access-Control-Allow-Origin':'*',
                                },
                                body:JSON.stringify(
                                    {
                                        email:signinemail.value,
                                        password:signinpassword.value,
                                    }
                                )
                            }).then((data)=>{
                                if(data){
                                    if(data.status==200)
                                    {
                                        data.json().then((el)=>{
                                            localStorage.setItem("token",el.token);
                                            updateisloggedin(true);
                                            updateusername(el.name);
                                            updateuserid(el._id)
                                        })
                                        navigate("/");
                                    }
                                    else{
                                        alert("invalid credentials")
                                    }
                                }
                            }).catch((err)=>{
                                console.log(err);
                                alert(err);
                            })
                            
                        }}>Sign In</button>
                    </div>
                    <div className="registertext" onClick={()=>{
                        updatechange(!change);
                    }}>Dont have a account? Register</div>
                    </div>
                    
                    </>
                )
            }
        
            else
            {
                return(
                    <>
                    
                        
                    <div className="signmaincontainer">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" height="100px" width="200px"></img>
                    <div className="signmain">
                    
                        <div className="signtitle2">Register</div>
                        <div className="signtext">Name</div>
                        <input type="text" className="signinput" id="registername"></input>
                        <div className="signtext">Email</div>
                        <input type="email" className="signinput" id="registeremail"></input>
                        <div className="signtext">Password</div>
                        <input type="password" className="signinput" id="registerpassword"></input>
                        <button className="signbutton" onClick={()=> {
                            const registeremail=document.getElementById("registeremail");
                            const registerpassword=document.getElementById("registerpassword");
                            const registername=document.getElementById("registername");
                            console.log("name",registeremail);
                            if(registeremail.value!=""&&registerpassword.value!=""&&registeremail.value!="")
                            {
                                fetch("http://localhost:5100/register",{
                                    method:"POST",
                                    headers:{
                                        "Content-Type":"application/json",
                                        'Access-Control-Allow-Origin':'*',
                                    },
                                    body:JSON.stringify(
                                        {
                                            email:registeremail.value,
                                            password:registerpassword.value,
                                            name:registername.value,
                                            channelcreated:false
                                        }
                                    )
                                }).then((data)=>{
                                    if(data){
                                        if(data.status==200)
                                        {
                                            data.json().then((el)=>{
                                                localStorage.setItem("token",el.token);
                                                updateisloggedin(true);
                                                updateusername(registername.value)
                                            })
            
                                            fetch("http://localhost:5100/emailfetch",{
                                                method:"POST",
                                                headers:{"Content-Type":"application/json",
                                        },
                                        body:JSON.stringify({
                                            email:registeremail.value,
                                        })
                                            }).then((datatwo)=>{
                                                console.log(registeremail.value);
                                                datatwo.json().then((el)=>{
                                                    console.log("el",el);
                                                    updateuserid(el.id)
                                                })}).catch((errtwo)=>{
                                                console.log(errtwo);
                                            })
                                            
                                                navigate("/");
                                            
                                            
                                        }
                                        else if(data.status==400){
                                            alert("Email already exists")
                                        }
                                    }
                                }).catch((err)=>{
                                    console.log(err);
                                    alert(err);
                                })
                            }

                            else{
                                alert("Fill all values");
                            }
                            
                            
                        }}>Register</button>
                    </div>
                    <div className="registertext" onClick={()=>{
                        updatechange(!change);
                    }}>Already have a account? Sign In</div>
                    </div>
                    
                    </>
                )
            }
    }

    

   
}
export default Signup;