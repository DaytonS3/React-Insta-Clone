import React from 'react';
import './Comment.css'


const Input = props => {
    return(
        <form onSubmit={props.addComment}>
            <input className="AddComment"
             type="text" 
             value={props.input}
             placeholder="Add a comment.." 
             onChange={props.handle}
            />
        </form>
        
    )
   
}

export default Input;