import React from 'react';
import '../css/RecipeShow.css';
import Button from './Button'

function displayIngredients(ingredients) {
  for(let i of ingredients){
    return i.name
  }
}

const RecipeShow = (props) => {
  console.log(props);
  return (
    <div className="recipe-show">
      <h1> {props.recipe.name}</h1>
      <img src={props.recipe.imgurl} alt={props.recipe.name} />
      <p> Servings: {props.recipe.servings} </p>
      <p> Prep Time: {props.recipe.preptime} minutes </p>
      <p> Ingredients: {displayIngredients(props.recipe.ingredients)}</p>
      <p> Instructions: {props.recipe.instructions} </p>
      <p> Source: <a href={props.recipe.sourceUrl}>{props.recipe.sourceUrl}</a> </p>
      <h4>GF Icon: {props.recipe.glutenFree.toString()}</h4>
      <h4>DairyFree Icon: {props.recipe.dairyFree.toString()}</h4>
      <h4>W30 Icon: {props.recipe.whole30.toString()}</h4>
      <h4>Keto Icon: {props.recipe.keto.toString()}</h4>
      <h4>Vegan Icon: {props.recipe.vegan.toString()}</h4>
      <h4>Veg Icon: {props.recipe.vegetarian.toString()}</h4>
      <h4>Healthy Icon: {props.recipe.healthy.toString()}</h4>
      <Button text={"Remove from Box"}/>
      <Button text={"Add to Calendar"}/>
    </div>
  )
}

export default RecipeShow;


// <p>Dish Types: {props.recipe.dishType.split(",").join(", ")}</p>
