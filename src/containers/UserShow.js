import React, { Component } from 'react';
import '../css/UserShow.css';
import UserInfo from '../components/UserInfo';


class UserShow extends Component {

  generateUserInfo = () => {
    return (
        <UserInfo
          key={this.props.user.id}
          user={this.props.user}
        />
      )
  }


  render(){
    console.log("usershow", this.props.user);
    return (
      <div className="user-show">
        {this.generateUserInfo()}
      </div>
    )
  }

}

export default (UserShow);
