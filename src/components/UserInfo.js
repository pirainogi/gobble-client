import React from 'react';
import '../css/UserInfo.css';


const UserInfo = () => {
  // console.log(props);
  return (
    <div className="user-info">
      <h4> Username:  </h4>
      <div>
        <h4> Bio:  </h4>
      </div>
      <h4> Allergies: </h4>
      <h4> Diet: </h4>
    </div>
  )
}

export default (UserInfo);
