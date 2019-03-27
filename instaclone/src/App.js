import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

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
        <SearchBar
        searchTerm={this.searchTerm}
        handle={this.submithandle}
        />
        {this.state.data.map(data => (
          <PostContainer key={data.username} data={
             this.state.filter === '' ? data : this.state.filter[0]
          }
          />
        ))}
        
      </div>
      
    );
    
  }
  
}

export default App;
