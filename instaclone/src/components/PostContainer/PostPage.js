import React from 'react';
import './postContainer.css'
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


const PostPage = props => {
    console.log({props})
    return(
        <div>
            <SearchBar
        searchTerm={props.searchTerm}
        handle={props.handle}
        />
        {props.data.map(data => (
          <PostContainer key={props.data.username} data={
             props.filter === '' ? data : props.filter[0]
          }
          />
        ))}
        </div>
    )
}

export default PostPage ;