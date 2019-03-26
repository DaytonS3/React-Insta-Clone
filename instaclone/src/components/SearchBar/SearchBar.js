import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return(
        <div className="SearchBar">
            
                <i class="fab fa-instagram"></i>
                <p>Instagram</p>
            
            
            <input className="search" type="text" placeholder="Search.." />
            
            
               <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="fas fa-user-tag"></i> 
            
            


        </div>
        

    )
}

export default SearchBar;