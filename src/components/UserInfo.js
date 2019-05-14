import React, { Component } from 'react';
import '../css/UserInfo.css';


class UserInfo extends Component {


  render () {
    console.log(this.props);

    return (
      <div className="user-info">
        <img src={this.props.user.profile_pic} alt="user profile"></img>
        <div className="details">
          <p> <b>Name:</b> {this.props.user.name}<br></br><br></br>
          <b>Bio:</b> {this.props.user.bio}<br></br>
          <b>Allergies:</b> {this.props.user.allergies}<br></br>
          <b>Diet:</b> {this.props.user.diet}</p>
          {this.props.user.recipes.length === undefined ?
            <p><b>RecipeBox:</b> 0 Saved Recipes</p> :
            <p><b>RecipeBox:</b> {this.props.user.recipes.length} Saved Recipes</p>
          }
        </div>

        <button> edit ur profile</button>
      </div>
    )
  }
}

export default UserInfo;

// <button className='button'>Change PW</button><br></br>
// <button className='button'>Delete Acct</button>
