import "./Videodetailside.css"



function Videodetailside(props)
{

    return(
        <>
        <div className="videodetailsidemmain">
            <img className="videodetailsideimage" src={props.data.thumbnailUrl}></img>
            <div className="videodetailsidemain2">
            <div className="videodetailsidetitle">{props.data.title}</div>
            <div className="videodetailsidetitle2">{props.data.channelName}</div>
            <div className="videodetailsidetitle2">{props.data.views} {props.data.uploadDate}</div>
            </div>
        </div>
        </>
    )
}

export default Videodetailside;