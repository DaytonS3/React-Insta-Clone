import React from 'react';
import styled from 'styled-components'

const LoginContainer = styled.div`
    width: 350px;
    background: lightgrey;
    margin: 0 auto;
    border-radius: 5px;
    position: absolute;
    top: 200px;
    right: 270px;
`
const LoginContent = styled.div`
    text-align: center;
    
`
const LoginInput = styled.input`
    border: none;
    border-bottom: 2px solid black;
    background: transparent;
    color: black;
    margin-bottom: 10px;
`

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

   
    onSubmit = (e) => {
        const username = this.state.username;
        const password = this.state.password;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.reload();
        
    }
     

    render(){
        return(
            <LoginContainer>
                
                <LoginContent>
                    <h1>Instagram</h1>
                    <form>
                        <LoginInput type="text" 
                        value={this.state.username} 
                        placeholder="Username" 
                        onChange={e => this.setState({username: e.target.value})}
                        />
                        <LoginInput type="password"
                        value={this.state.password} 
                        placeholder="Password" 
                        onChange={e => this.setState({password: e.target.value})}
                        />
                    </form>
                    <button onClick={() => this.onSubmit()}>Login</button>
                </LoginContent>


            </LoginContainer>
        )
    }
}

export default Login;