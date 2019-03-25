import React from 'react';
import './postContainer.css'

const PostContainer = props => {
    //console.log(props.data.username)
    return(
        <div>
            <p>{props.data.username}</p>
        </div>
    )
}

export default PostContainer;