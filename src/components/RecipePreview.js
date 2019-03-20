import React from 'react';
import '../css/RecipePreview.css';
import '../css/Button.css';


const RecipePreview = (props) => {

  return (
    <div className="recipe-preview">
      <h1> {props.recipe.name} </h1>
      <img src={props.recipe.imgurl} alt={props.recipe.name}/>
      <p>glutenfree: {props.recipe.glutenFree.toString()}</p>
      <p>dairyfree: {props.recipe.dairyFree.toString()}</p>
      <p>keto: {props.recipe.keto.toString()}</p>
      <p>vegetarian: {props.recipe.vegetarian.toString()}</p>
      <p>vegan: {props.recipe.vegan.toString()}</p>
      <p>healthy: {props.recipe.healthy.toString()}</p>
      <button className='button' onClick={props.pushToRecipeShow}>View</button>
    </div>
  )

}

export default RecipePreview;
