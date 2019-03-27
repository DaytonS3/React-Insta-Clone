import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    
    return(
        <div className="SearchBar">
            
                <i className="fab fa-instagram"></i>
                <p>Instagram</p>
            
            <form onSubmit={props.handle}>
               <input className="search" 
                   onChange={props.searchTerm} 
                   placeholder="Search.." 
                   
                /> 
            </form>
            
            
            
               <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="fas fa-user-tag"></i> 
            
            


        </div>
        

    )
}

export default SearchBar;