import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
    data: []
    }
  }
  
  componentDidMount() {
    this.setState({ data: dummyData });
    
  }

  


  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(data => (
          <PostContainer key={data.username} data={data}/>
        ))}
        
      </div>
      
    );
    
  }
  
}

export default App;
