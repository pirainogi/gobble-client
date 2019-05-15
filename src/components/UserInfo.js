import React, { Component } from 'react';
import Modal from './Modal';
import '../css/UserInfo.css';


class UserInfo extends Component {

  constructor() {
    super();

    this.state = {
      isShowing: false
    }
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
    console.log(this.props.user);

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
          testing 1 2 3
        </Modal>

      </div>
    )
  }
}

export default UserInfo;

// <button className='button'>Change PW</button><br></br>
// <button className='button'>Delete Acct</button>
