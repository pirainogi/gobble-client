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
      <h1> </h1>
      <img />
      <p> Servings: </p>
      <p> Prep Time:  minutes </p>
      <p> Ingredients: </p>
      <p> Instructions:  </p>
      <p> Source: <a></a> </p>
      <h4>GF Icon: </h4>
      <h4>DairyFree Icon: </h4>
      <h4>W30 Icon: </h4>
      <h4>Keto Icon: </h4>
      <h4>Vegan Icon: </h4>
      <h4>Veg Icon: </h4>
      <h4>Healthy Icon: </h4>
      <Button text={"Remove from Box"}/>
      <Button text={"Add to Calendar"}/>
    </div>
  )
}

export default RecipeShow;


// <p>Dish Types: {props.recipe.dishType.split(",").join(", ")}</p>
