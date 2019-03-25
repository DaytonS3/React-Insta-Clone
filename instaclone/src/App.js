import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  state={
    data: dummyData
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
