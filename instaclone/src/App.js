import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';

 const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

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
    
    

    
    return (
      <div className="App">
        <ComponentFromWithAuthenticate
        searchTerm={this.searchTerm}
        handle={this.submithandle}
        data={this.state.data}
        filter={this.state.filter}
        />
        
        <Login />
      </div>
      
    );
    
  }
  
}

export default App;
