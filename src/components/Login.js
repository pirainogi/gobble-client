import React, { Component } from 'react';
import '../css/Login.css';
import GoogleLogin from 'react-google-login';


//trying to see if I can connect google auth for login purposes
const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  //handles the controlled login form
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //upon submit, prevent the auto-refresh and send a post request to the API with the email and password, if successful, the returned user object is set in local state as the current user and the client is pushed to the profile page
  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        this.props.setCurrentUser(response)
        this.props.history.push('/profile')
      }
    })
  }

  render(){
    return (
      <div className='login'>
      <h3>login to gobble </h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="Email"/>
          <br></br>
          <label>Password: </label>
          <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password'/>
          <br></br>
          <input type="submit" value="Submit" className="button"/>
        </form>

        <GoogleLogin
          clientId="7681882745-qm7e2d4pkpu32nbf9qcgjbhhdq4315ic.apps.googleusercontent.com"
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />,

      </div>
    )
  }

}

export default Login;
