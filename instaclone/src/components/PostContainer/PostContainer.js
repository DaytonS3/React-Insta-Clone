import React from 'react';
import './postContainer.css'
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           count: props.data.likes
        }    
    }
    
    handleButtonClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
        <div className="Container">
            <div className="Content">
                <div className="Username"> 
                    <img className="Thumbnail" alt="thumbnail" src={this.props.data.thumbnailUrl} />
                    <p>{this.props.data.username}</p>
                </div>
            
                
                <img className="PostImg" alt="post" src={this.props.data.imageUrl}/>
                <div className="actionBtns">
                    <i onClick={this.handleButtonClick} className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <p className="Likes">{this.state.count} Likes</p>
            
                <CommentSection data={this.props.data} key={Math.random()} />
                
                
                <p className="time">{this.props.data.timestamp}</p>
                
                </div>
            
        </div>
    ) 
  }
   
   
}

export default PostContainer;