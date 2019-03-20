import React, { Component } from 'react';
import '../css/UserShow.css';
import UserInfo from './UserInfo';
import Button from './Button';


class UserShow extends Component {

  generateUserInfo = () => {
    return this.props.user.map(user => {
      return (
        <UserInfo
          key={user.id}
          user={user}
        />
      )
    })
  }

  render(){
    // console.log("usershow", this.props.user[0]);
    return (
        <div className="user-show">
          {this.generateUserInfo()}
          <Button text={'Change PW'}/>
          <Button text={'Delete Acct'}/>
        </div>
      )
  }

}

export default (UserShow);
