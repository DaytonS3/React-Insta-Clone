import React from 'react';
import './postContainer.css'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    
    return(
        <div className="Container">
            <div className="Content">
                <div className="Username"> 
                    <img className="Thumbnail" alt="thumbnail" src={props.data.thumbnailUrl} />
                    <p>{props.data.username}</p>
                </div>
            
                
                <img className="PostImg" alt="post" src={props.data.imageUrl}/>
                <div className="actionBtns">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <p className="Likes">{props.data.likes} Likes</p>
                {props.data.comments.map(texts => (
                    <CommentSection data={props.data} key={Math.random()} texts={texts} />
                ))}
                <p className="time">{props.data.timestamp}</p>
                    
                <input className="addComment" type="text" 
                       placeholder="Add a comment.." />
                </div>
            
        </div>
    )
   
}

export default PostContainer;