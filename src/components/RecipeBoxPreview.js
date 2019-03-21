import React from 'react';
import '../css/RecipeBoxPreview.css';
// import Button from './Button'

const RecipeBoxPreview = (props) => {
  console.log('recipeboxpreview props', props, 'button should work here');
  return (
    <div className="recipe-box-preview">
      <h1> recipebox preview </h1>
      <h3>{props.recipe.name}</h3>
      <img src={props.recipe.imgurl} alt={props.recipe.name} />
      <p>Servings: {props.recipe.servings}</p>
      <p>Preptime: {props.recipe.preptime} minutes</p>
      <p>GF Icon: {props.recipe.glutenFree !== undefined ? props.recipe.glutenFree.toString() : null }</p>
      <p>DairyFree Icon: {props.recipe.dairyFree !== undefined ? props.recipe.dairyFree.toString() : null }</p>
      <p>W30 Icon: {props.recipe.whole30 !== undefined ? props.recipe.whole30.toString() : null }</p>
      <p>Keto Icon: {props.recipe.keto !== undefined ? props.recipe.keto.toString() : null }</p>
      <p>Vegan Icon: {props.recipe.vegan !== undefined ? props.recipe.vegan.toString() : null }</p>
      <p>Veg Icon: {props.recipe.vegetarian !== undefined ? props.recipe.vegetarian.toString() : null }</p>
      <p>Healthy Icon: {props.recipe.healthy !== undefined ? props.recipe.healthy.toString() : null }</p>
      <button className='button' id={props.recipe.id} onClick={props.selectRecipePreviewForShow}>view</button>
    </div>
  )
}

export default RecipeBoxPreview;
