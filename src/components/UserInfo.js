import React, { Component } from 'react';
import Modal from './Modal';
import '../css/UserInfo.css';


class UserInfo extends Component {

  state = {
    isShowing: false,
    name: '',
    email: '',
    bio: '',
    allergies: '',
    diet: '',
    profile_pic: '',
    password_digest: '',
  }

  componentDidMount() {
    this.setState({
      name: this.props.user.name,
      email: this.props.user.email,
      bio: this.props.user.bio,
      allergies: this.props.user.allergies,
      diet: this.props.user.diet,
      profile_pic: this.props.user.profile_pic,
      password_digest: this.props.user.password_digest
    })
  }

  updateUser = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,  bio: this.state.bio, allergies: this.state.allergies, diet: this.state.diet, profile_pic: this.state.profile_pic,
        password_digest: this.state.password_digest
      })
    })
    .then(res => res.json())
    .then((response) => {
      console.log('updating user', response);
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.updateUser()
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    })
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    })
  }

  render () {
    console.log('state', this.state);

    return (
      <div className="user-info">
      {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

        <img src={this.props.user.profile_pic} alt="user profile"></img>
        <div className="details">
          <p> <b>Name:</b> {this.props.user.name}<br></br><br></br>
          <b>Bio:</b> {this.props.user.bio}<br></br>
          <b>Allergies:</b> {this.props.user.allergies}<br></br>
          <b>Diet:</b> {this.props.user.diet}</p>
          {this.props.user.recipes === undefined ?
            <p><b>RecipeBox:</b> 0 Saved Recipes</p> :
            <p><b>RecipeBox:</b> {this.props.user.recipes.length} Saved Recipes</p>
          }
        </div>

        <button className="open-modal-btn" onClick={this.openModalHandler}> edit ur profile</button>
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          <form>
            <br></br><label><b>Change Your Name:</b></label><br></br>
            <input type="text" id="user-name" name="name" placeholder={this.props.user.name} onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Change Your Email:</b></label><br></br>
            <input type="text" id="user-email" name="email" placeholder={this.props.user.email} onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Change Your Bio:</b></label><br></br>
            <input type="text" id="user-bio" name="bio" placeholder={this.props.user.bio} onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Change Your Allergies:</b></label><br></br>
            <input type="text" id="user-allergies" name="allergies" placeholder={this.props.user.allergies} onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Change Your Diet:</b></label><br></br>
            <input type="text" id="user-diet" name="diet" placeholder={this.props.user.diet} onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Update Your Profile Picture:</b></label><br></br>
            <input type="text" id="user-pic" name="profile_pic" placeholder={this.props.user.profile_pic} onChange={this.handleChange} required></input><br></br><br></br>
            <button onClick={this.handleSubmit}>Update Your Profile</button>
          </form>
        </Modal>

      </div>
    )
  }
}

export default UserInfo;

// <button className='button'>Change PW</button><br></br>
// <button className='button'>Delete Acct</button>


// if (response.errors){
//   alert(response.errors)
// } else {
// this.props.setCurrentUser(response)
// this.props.history.push('/profile')
// }
