import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    
    return(
        <div className="SearchBar">
            
                <i className="fab fa-instagram"></i>
                <p>Instagram</p>
            
            
            <input className="search" type="text" placeholder="Search.." />
            
            
               <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="fas fa-user-tag"></i> 
            
            


        </div>
        

    )
}

export default SearchBar;