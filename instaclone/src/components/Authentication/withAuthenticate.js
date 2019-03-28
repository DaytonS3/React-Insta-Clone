import React from 'react';

const withAuthenticate = Post => Login => {
return(
    class  extends React.Component {
     constructor(props){
         super(props);
            this.state = {
                login: false
            }

        }


        componentDidMount(){
            if(!localStorage.getItem('username')) {
                this.setState({ login: false});
            }else {
                this.setState({ login: true });
            }
        }

     render() {
        if(this.state.login) {
            return <Post {...this.props} />;
        }else {
            return <Login {...this.props} />
        }
        
        

        }
    }
    )
}

export default withAuthenticate;