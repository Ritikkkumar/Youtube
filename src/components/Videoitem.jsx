import "./Videoitem.css"
import userContext from "../utils/context";
import { useContext } from "react";



function Videoitem(props)
{
    const {sidebar}=useContext(userContext);
    
    return(
        <>
        <div className="videoitemmain">
            <img className="videoitemimage" id="videoimage" src={props.data.thumbnailUrl}></img>
            <div className="videoitemtitle">{props.data.title}</div>
            <div className="videoitemtitle2">{props.data.channelName}</div>
            <div className="videoitemtitle2">{props.data.views} {props.data.uploadDate}</div>
        </div>
        </>
    )
}

export default Videoitem;