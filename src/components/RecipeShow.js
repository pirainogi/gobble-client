import React from 'react';
import '../css/RecipeShow.css';
import Button from './Button'

// function displayIngredients(ingredients) {
//   for(let i of ingredients){
//     return i.name
//   }
// }

const RecipeShow = (props) => {
  // console.log(props.recipe.glutenFree);
  return (
    <div className="recipe-show" id={props.recipe.id}>
      <h1>Name {props.recipe.name}</h1>
      <img src={props.recipe.imgurl} alt={props.recipe.name} />
      <p> Servings: {props.recipe.servings}</p>
      <p> Prep Time: {props.recipe.preptime} minutes </p>
      <p> Ingredients: </p>
      <p> Instructions: {props.recipe.instructions} </p>
      <p> Source: <a href={props.recipe.sourceUrl}> {props.recipe.sourceUrl}</a></p>
      <h4>GF Icon: {props.recipe.glutenFree !== undefined ? props.recipe.glutenFree.toString() : null }</h4>
      <h4>DairyFree Icon: {props.recipe.dairyFree !== undefined ? props.recipe.dairyFree.toString() : null }</h4>
      <h4>W30 Icon: {props.recipe.whole30 !== undefined ? props.recipe.whole30.toString() : null }</h4>
      <h4>Keto Icon: {props.recipe.keto !== undefined ? props.recipe.keto.toString() : null }</h4>
      <h4>Vegan Icon: {props.recipe.vegan !== undefined ? props.recipe.vegan.toString() : null }</h4>
      <h4>Veg Icon: {props.recipe.vegetarian !== undefined ? props.recipe.vegetarian.toString() : null }</h4>
      <h4>Healthy Icon: {props.recipe.healthy !== undefined ? props.recipe.healthy.toString() : null }</h4>
      <Button text={"Add to Box"}/>
      <Button text={"Add to Calendar"}/>
    </div>
  )
}

export default RecipeShow;


// <p>Dish Types: {props.recipe.dishType.split(",").join(", ")}</p>
