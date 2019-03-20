import React from 'react';
import '../css/UserInfo.css';


const UserInfo = (props) => {
  console.log(props.user);

  return (
    <div className="user-info">
      <h1> NAME: {props.user.name}</h1>
      <h2> PIC PLACEHOLDER </h2>
      <h4> Username: {props.user.username} </h4>
      <div>
        <h4> Bio: {props.user.bio} </h4>
      </div>
      <h4> Allergies: {props.user.allergies}</h4>
      <h4> Diet: {props.user.diet}</h4>
    </div>
  )

}

export default UserInfo;
