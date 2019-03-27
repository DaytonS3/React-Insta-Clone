import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostPage from './components/PostContainer/PostPage';

class App extends React.Component {
  constructor(){
    super();
    this.state={
    data: [],
    filter: '',
    searchInput: ''
    }
  }
  
  componentDidMount() {
    this.setState({ data: dummyData });
    
  }

  

  searchTerm = e => {
    
     this.setState({ searchInput: e.target.value });
  };

    submithandle = (e) => {
      e.preventDefault();
      const filtered = this.state.data.filter(p => 
        p.username === this.state.searchInput
      )
      this.setState({
        filter: filtered
      })
    }

  render() {
    
    console.log(this.state.filter)

    
    return (
      <div className="App">
        <PostPage
        searchTerm={this.searchTerm}
        handle={this.submithandle}
        data={this.state.data}
        filter={this.state.filter}
        />
        
        
      </div>
      
    );
    
  }
  
}

export default App;
