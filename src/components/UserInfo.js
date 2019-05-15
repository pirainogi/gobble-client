import React, { Component } from 'react';
import Modal from './Modal';
import '../css/UserInfo.css';


class UserInfo extends Component {

  constructor() {
    super();

    this.state = {
      isShowing: false,
      name: '',
      email: '',
      bio: '',
      allergies: '',
      diet: '',
      profile_pic: '',
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.user.name,
      email: this.props.user.email,
      bio: this.props.user.bio,
      allergies: this.props.user.allergies,
      diet: this.props.user.diet,
      profile_pic: this.props.user.profile_pic,
    })
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
    console.log('user props', this.props.user, 'state', this.state);

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
            <input type="text" id="user-name" name="name" onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Change Your Bio:</b></label><br></br>
            <input type="text" id="user-bio" name="bio"  onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Change Your Allergies:</b></label><br></br>
            <input type="text" id="user-allergies" name="allergies" onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Change Your Diet:</b></label><br></br>
            <input type="text" id="user-diet" name="diet" placeholder={this.props.recipeForEvent} onChange={this.handleChange} required></input><br></br><br></br>
            <label><b>Update Your Profile Picture:</b></label><br></br>
            <input type="text" id="user-pic" name="profile_pic" placeholder={this.props.recipeForEvent} onChange={this.handleChange} required></input><br></br><br></br>
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
