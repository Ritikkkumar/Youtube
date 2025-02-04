import "./comment.css";


function Comment(props)
{
    
    
    
    function dropdwon()
    {
        const drop=document.getElementById("box");
        if(drop.style.visibility=="visible")
        {
            drop.style.visibility="hidden";
        }
        else{
            drop.style.visibility="visible";
        }
        
    }
    return(
        <>
        <div className="commentone">
        <div className="commentuser">{props.data.userId}</div>
        <i className="fas fa-ellipsis-v" onClick={dropdwon}></i>
        <div id="box" className="commentbox">
            <div className="dropoption" onClick={()=>{
                
                const commentmsg=prompt("Write your comment");
                //console.log(props.id,props,)
                fetch("http://localhost:5100/edit",{
                    method:"PUT",
                    headers:{"Content-Type":"application/json",
                        'Access-Control-Allow-Origin':'*',
                    },
                    body:JSON.stringify({
                        id:props.id,
                        cid:props.data.commentId,
                        comment:commentmsg,
                    }),
            }).then((data)=>{console.log(data);
                
                location.reload();
                
            }).catch((err)=>console.log(err));
            

            
            }}>Edit</div>
            <div className="dropoption" onClick={()=>{
                fetch("http://localhost:5100/remove",{
                    method:"PUT",
                    headers:{"Content-Type":"application/json",
                        'Access-Control-Allow-Origin':'*',
                    },
                    body:JSON.stringify({
                        id:props.id,
                        cid:props.data.commentId,
                        
                    }),
            }).then((data)=>{console.log(data);
                
                location.reload();
                
            }).catch((err)=>console.log(err));
            }}>Delete</div>
        </div>
        </div>
        
        < div className="commenttext">{props.data.text}</div>
        </>
    )
    
}

export default Comment;