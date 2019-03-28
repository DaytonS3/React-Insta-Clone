import React from 'react';
import styled from 'styled-components'

const CommentSection = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
`
const Name = styled.p`
    font-weight: bold;
    margin: 0 10px;
`
const Comments = styled.p`
    margin-bottom: 2px;
`

const Comment = props => {
    
    return(
        <CommentSection>
            <Name>{props.text.username}</Name>
            <Comments>{props.text.text}</Comments> 
        </CommentSection>
    )
   
}

export default Comment;