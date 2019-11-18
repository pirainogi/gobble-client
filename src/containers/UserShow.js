import React, { Component } from 'react';
import '../css/UserShow.css';
import UserInfo from '../components/UserInfo';


class UserShow extends Component {

  //create the user info component 
  generateUserInfo = () => {
    return (
      <UserInfo
        key={this.props.user.id}
        user={this.props.user}
      />
    )
  }

  render(){
    return (
      <div className="user-show">
        {this.generateUserInfo()}
      </div>
    )
  }

}

export default (UserShow);
