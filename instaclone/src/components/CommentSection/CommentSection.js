import React from 'react';
import './Comment.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: 'hello'
        }
    }
    componentDidMount() {
        this.setState({
            comments: this.props.data.comments
        }) 

        

        
    }

    render(){
        console.log(this.props.props)
    return(
        <div className="CommentSection">
           <p className="name">{this.props.texts.username}</p>
            <p className="Comment">{this.props.texts.text}</p> 
        </div>
        
    )
 }
}

export default CommentSection;