import React from 'react';
import './Comment.css'

const CommentSection = props => {
    console.log(props.texts)
    return(
        <div className="CommentSection">
           <p className="name">{props.texts.username}</p>
            <p className="Comment">{props.texts.text}</p> 
        </div>
        
    )
}

export default CommentSection;