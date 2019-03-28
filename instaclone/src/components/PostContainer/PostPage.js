import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


const PostPage = props => {
    
    return(
        <div>
            <SearchBar
        searchTerm={props.searchTerm}
        handle={props.handle}
        />
        {props.filter.map(post => (
          <PostContainer key={post.username} data={post}
          />
        ))}
        </div>
    )
}

export default PostPage ;