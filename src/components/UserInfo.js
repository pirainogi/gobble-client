import React from 'react';
import '../css/UserInfo.css';


const UserInfo = (props) => {
  console.log(props.user);

  return (
    <div className="user-info">
      <img src={props.user.profile_pic} alt="user profile"></img>
      <div className="details">
        <p> <b>Name:</b> {props.user.name}<br></br><br></br>
        <b>Bio:</b> {props.user.bio}<br></br>
        <b>Allergies:</b> {props.user.allergies}<br></br>
        <b>Diet:</b> {props.user.diet}</p><br></br><br></br>
        {props.user.recipes.length === undefined ?
          <p><b>RecipeBox:</b> 0 Saved Recipes</p> :
          <p><b>RecipeBox:</b> {props.user.recipes.length} Saved Recipes</p>
        }
      </div>
    </div>
  )

}

export default UserInfo;

// <button className='button'>Change PW</button><br></br>
// <button className='button'>Delete Acct</button>
