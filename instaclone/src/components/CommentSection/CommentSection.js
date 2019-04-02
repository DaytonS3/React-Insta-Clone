import React from 'react';
import './Comment.css'
import Comment from './Comment';
import Input from './Input';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            input: ''
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.data.comments
        })  
    }

    addComment = (e, index) => {
        e.preventDefault();
        
        const NewComment = {text: this.state.input, username: 'DaytonSteinmeyer'};
        
        

        this.setState({
           comments: [...this.state.comments, NewComment],
           input: ''
        })
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value})
        
    }

    render(){
        
    return(
        
        <div className="CommentContainer">
            {this.state.comments.map((text) => <Comment  key={Math.random()}text={text} />)}
            
            <Input text={this.state.comments}
             handle={this.handleChange}
             addComment={this.addComment}
             />
        
           
        </div>
        
        
    )
 }
}

export default CommentSection;