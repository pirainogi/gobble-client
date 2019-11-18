import React, { Component } from 'react';
import '../css/Signup.css';

class Signup extends Component {

  state = {
    name: '',
    profile_pic: '',
    bio: '',
    allergies: '',
    diet: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  //handling the controlled form
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //posting to the users API with the state from the form, if the user posts successfully, the user is set to local state and the client is pushed to the profile
  createUser = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then((response) => {
      if (response.errors){
        alert(response.errors)
      } else {
      this.props.setCurrentUser(response)
      this.props.history.push('/profile')
      }
    })
  }

  //upon submit, prevent the auto refresh, confirm that the passwords entered match, and then create the user 
  handleSubmit= (e) => {
    e.preventDefault()
    if(this.state.password === this.state.passwordConfirmation){
      this.createUser()
    } else {
      alert("Passwords don't match!")
    }
  }

  render(){
     return (
      <div className='signup'>
        <h3>create your gobble account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" placeholder='Name' onChange={this.handleChange} value={this.state.name}/>
          <br></br>
          <label>Profile Picture (Link): </label>
          <input type="text" name="profile_pic" placeholder="Profile Picture" onChange={this.handleChange} value={this.state.profile_pic}/>
          <br></br>
          <label>Bio: </label>
          <input type="text" name="bio" placeholder="Bio" onChange={this.handleChange} value={this.state.bio}/>
          <br></br>
          <label>Allergies: </label>
          <input type="text" name="allergies" placeholder="Allergies" onChange={this.handleChange} value={this.state.allergies}/>
          <br></br>
          <label>Diet: </label>
          <input type="text" name="diet" placeholder="Diet" onChange={this.handleChange} value={this.state.diet}/>

          <label>Email: </label>
          <input type="email" name="email" placeholder='Email' onChange={this.handleChange} value={this.state.email}/>
          <br></br>
          <label>Password: </label>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          <br></br>
          <label>Password Confirmation: </label>
          <input type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.handleChange} value={this.state.passwordConfirmation}/>
          <br></br>
          <input type="submit" value="Submit" className="button"/>
        </form>
      </div>
    )
  }

}

export default Signup;
