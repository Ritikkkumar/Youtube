import "./channeldetails.css"
import UseFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Channeldetails(props){

    const params=useParams();
    const navigate=useNavigate();

    const {data,error,loading}=UseFetch("http://localhost:5100/channelvideos");
    if(data)
    {
        const filtered=data.filter((el)=>{
            return el.videoId==params.id;
        })
        console.log(filtered);
        return(
            <>
            <div className="channeldetailsmain">
                <div className="channeldetailsmaintwo">
                    <h1>Edit video details</h1>
                <iframe src={`https://www.youtube.com/embed/${params.id}?autoplay=1`}  height="350px" width="550px"></iframe>
                    <label className="videonamelabel">Video Name</label>
                    <input type="text" className="channeldetailsinput" id="videoname" defaultValue={filtered[0].title}></input>
                    <label className="videodescriptionlabel">Video Description</label>
                    <input type="text" className="channeldetailsinput" id="videodescription" defaultValue={filtered[0].description}></input>
                    <div className="opptions">
                        <button className="savebuttontwo" onClick={()=>{

                            const name=document.getElementById("videoname");
                            const description=document.getElementById("videodescription")
                            fetch("http://localhost:5100/updatevideo",{
                                method:"PUT",
                                headers:{
                                    "Content-Type":"application/json",
                            'Access-Control-Allow-Origin':'*',
                                },
                                body:JSON.stringify({

                                    id:filtered[0].videoId,
                                    name:name.value,
                                    description:description.value

                                })
                            }).then((data)=>{
                                console.log(data);
                                alert("Video details updated");
                                navigate("/channel");
                            }).catch((err)=>{console.log(err)})
                        }}>Save</button>
                        <button className="deletebutton" onClick={()=>{
                            fetch("http://localhost:5100/deletevideo",{
                                method:"PUT",
                                headers:{
                                    "Content-Type":"application/json",
                            'Access-Control-Allow-Origin':'*',
                                },
                                body:JSON.stringify({

                                    id:filtered[0].videoId

                                })
                            }).then((data)=>{
                                console.log(data);
                                alert("Video deleted");
                                navigate("/channel");
                            }).catch((err)=>{console.log(err)})
                        }}>Delete</button>
                    </div>
                </div>
            </div>
            </>
        )
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

export default Channeldetails;