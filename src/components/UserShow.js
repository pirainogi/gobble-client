import React, { Component } from 'react';
import '../css/UserShow.css';
import UserInfo from './UserInfo';
import Button from './Button';


class UserShow extends Component {

  render(){
    console.log("usershow");
    return (
        <div className="user-show">
          <h1> NAME: </h1>
          <h2> PIC PLACEHOLDER </h2>
          <UserInfo />
          <Button text={'Change PW'}/>
          <Button text={'Delete Acct'}/>
        </div>
      )
  }

}

export default (UserShow);
