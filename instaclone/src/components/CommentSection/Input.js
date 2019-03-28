import React from 'react';
import styled from 'styled-components'


const Inputs = styled.input`
    margin-left: 10px;
    border: none;
    margin-top: 5px;
    font-size: 12px;
`

const Input = props => {
    return(
        <form onSubmit={props.addComment}>
            <Inputs
             type="text" 
             value={props.input}
             placeholder="Add a comment.." 
             onChange={props.handle}
            />
        </form>
        
    )
   
}

export default Input;