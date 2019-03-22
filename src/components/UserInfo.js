import React from 'react';
import '../css/UserInfo.css';


const UserInfo = (props) => {
  console.log(props.user);

  return (
    <div className="user-info">
      <h2> PIC PLACEHOLDER </h2>
      <h4> Bio: {props.user.bio} </h4>
      <h4> Allergies: {props.user.allergies}</h4>
      <h4> Diet: {props.user.diet}</h4>
    </div>
  )

}

export default UserInfo;
