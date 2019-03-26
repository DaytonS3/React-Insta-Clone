import React from 'react';
import './Comment.css'


const Comment = props => {
    
    return(
        <div className="CommentSection">
            <p className="name">{props.text.username}</p>
            <p className="Comment">{props.text.text}</p> 
        </div>
    )
   
}

export default Comment;