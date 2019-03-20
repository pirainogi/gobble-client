import React from 'react';
import '../css/UserInfo.css';


const UserInfo = (props) => {
  console.log(props);
  return (
    <div className="user-info">
      <h4> Username: {props.currentUser[0].username} </h4>
      <div>
        <h4> Bio: {props.currentUser[0].bio} </h4>
      </div>
      <h4> Allergies: {props.currentUser[0].allergies} </h4>
      <h4> Diet: {props.currentUser[0].diet}</h4>
    </div>
  )
}

export default (UserInfo);
