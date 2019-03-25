import React from 'react';
import './postContainer.css'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    console.log("data",props.data)
    return(
        <div className="Container">
            <div className="Content">
                <div className="Username"> 
                    <img className="Thumbnail" src={props.data.thumbnailUrl} />
                    <p>{props.data.username}</p>
                </div>
            
                
                <img className="PostImg" src={props.data.imageUrl}/>
                <div className="actionBtns">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                </div>
                <p className="Likes">{props.data.likes} Likes</p>
                {props.data.comments.map(texts => (
                    <CommentSection key={Math.random()} texts={texts} />
                ))}
                <p className="time">{props.data.timestamp}</p>

                <input className="addComment" type="text" placeholder="Add a comment.." />
                </div>
            
        </div>
    )
}

export default PostContainer;