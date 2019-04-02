import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

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
    console.log(this.props);
    return (
      <div className='login'>
        <h1>this is the login page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="Email"/>
          <br></br>
          <label>Password: </label>
          <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password'/>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default Login;
