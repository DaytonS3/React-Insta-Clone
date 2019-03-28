import React from 'react';
import './SearchBar.css'
import styled from 'styled-components'

const Headers = styled.header`
    display: flex;
    align-items: center;
    background: rgb(238, 237, 237);
    width: 450px;
    height: 50px;
    margin-left: 250px;
`
const Input = styled.input`

    width: 120px;
    margin: 0 60px;
    border-radius: 10px;
    border: none;
    height: 25px;
    text-align: center;

`
const SearchHeader = styled.p`
    margin-bottom: 0px;
    
`

const SearchBar = props => {
    
    return(
        <Headers>
            
                <i className="fab fa-instagram"></i>
                <SearchHeader>Instagram</SearchHeader>
            
            <form onSubmit={props.handle}>
               <Input  
                   onChange={props.searchTerm} 
                   placeholder="Search.." 
                   
                /> 
            </form>
            
            
            
               <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="fas fa-user-tag"></i> 
            
            


        </Headers>
        

    )
}

export default SearchBar;