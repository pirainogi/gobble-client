import React from 'react';
import '../css/UserShow.css';
import UserInfo from './UserInfo';
import Button from './Button';

const UserShow = () => {
  return (
    <div className="user-show">
      <h1> NAME HERE </h1>
      <h2> PIC PLACEHOLDER </h2>
      <UserInfo />
      <Button text={'Change PW'}/>
      <Button text={'Delete Acct'}/>
    </div>
  )
}

export default UserShow;
