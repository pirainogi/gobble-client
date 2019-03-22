import React, { Component } from 'react';
import '../css/UserShow.css';
import UserInfo from '../components/UserInfo';
import UserButtons from '../components/UserButtons'
import Footer from '../components/Footer'
// import Button from '../components/Button';


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

  generateUserButtons = () => {
    return this.props.user.map(user => {
      return (
        <UserButtons
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
        <div>
          {this.generateUserButtons()}
          {this.generateUserInfo()}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }

}

export default (UserShow);
