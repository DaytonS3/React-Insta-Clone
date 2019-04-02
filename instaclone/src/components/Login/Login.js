import React from 'react';
import './Login.css';


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
            <div className="LoginContainer">
                <h1>LoginPage</h1>
                <div>
                    <form>
                        <input type="text" 
                        value={this.state.username} 
                        placeholder="Username" 
                        onChange={e => this.setState({username: e.target.value})}
                        />
                        <input type="text"
                        value={this.state.password} 
                        placeholder="Password" 
                        onChange={e => this.setState({password: e.target.value})}
                        />
                    </form>
                    <button onClick={() => this.onSubmit()}>Login</button>
                </div>


            </div>
        )
    }
}

export default Login;