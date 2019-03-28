import React from 'react';
import styled from 'styled-components'
import CommentSection from '../CommentSection/CommentSection';


const Container = styled.div`
    width: 450px;
    margin-left: 250px;
`

const Content = styled.div`
    background: white;
    padding: 3px;
`
const Username = styled.div`
    display: flex;
    padding: 10px;
`
const ActionBtns = styled.div`
display: flex;
align-items: center;
`

const ImageThumb = styled.img`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 0 10px;
`
const ImagePost = styled.img`
    height: 450px;
    width: 100%;
`
const Likes = styled.p`
    font-size: 12px;
    margin-left: 10px;
    margin-bottom: 5px;
    font-weight: bold;
`
const Time = styled.p`
    font-size: 10px;
    color: grey;
    margin: 2px 10px;
`

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
        <Container>
            <Content>
                <Username> 
                    <ImageThumb alt="thumbnail" src={this.props.data.thumbnailUrl} />
                    <p>{this.props.data.username}</p>
                </Username>
            
                
                <ImagePost alt="post" src={this.props.data.imageUrl}/>
                <ActionBtns>
                    <i onClick={this.handleButtonClick} className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </ActionBtns>
                <Likes>{this.state.count} Likes</Likes>
            
                <CommentSection data={this.props.data} key={Math.random()} />
                
                
                <Time>{this.props.data.timestamp}</Time>
                
                </Content>
            
        </Container>
    ) 
  }
   
   
}

export default PostContainer;