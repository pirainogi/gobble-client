import React from 'react';
import '../css/Button.css';


const UserButtons = (props) => {

return (
  <div className="user-buttons">
    <h1> NAME: {props.user.name}</h1>
    <button className='button'>Change PW</button><br></br>
    <button className='button'>Delete Acct</button>
  </div>
)

}

export default (UserButtons);
