import React from 'react';
import '../css/UserInfo.css';


const UserInfo = (props) => {
  console.log(props.user);

  return (
    <div className="user-info">
      <img src={props.user.profile_pic} alt="user profile picture"></img>
      <div className="details">
        <p> <b>Name:</b> {props.user.name}<br></br><br></br>
        <b>Bio:</b> {props.user.bio}<br></br>
        <b>Allergies:</b> {props.user.allergies}<br></br>
        <b>Diet:</b> {props.user.diet}<br></br><br></br>
        <b>RecipeBox:</b> {props.user.recipes.length} Saved Recipes</p>
      </div>
    </div>
  )

}

export default UserInfo;

// <button className='button'>Change PW</button><br></br>
// <button className='button'>Delete Acct</button>
