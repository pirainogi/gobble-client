import React from 'react';
import '../css/RecipeShow.css';
import Button from './Button'


const RecipeShow = () => {
  return (
    <div className="recipe-show">
      <h1> RECIPE SHOW </h1>
      <h4> Pic Placeholder </h4>
      <p> Servings </p>
      <p> Prep Time </p>
      <p> INSTRUCTIONS </p>
      <p> INSTRUCTIONS </p>
      <p> INSTRUCTIONS </p>
      <p>Source URL </p>
      <p>Dish Types</p>
      <h4>GF Icon</h4>
      <h4>DairyFree Icon</h4>
      <h4>W30 Icon</h4>
      <h4>Keto Icon</h4>
      <h4>Vegan Icon</h4>
      <h4>Veg Icon</h4>
      <h4>Healthy Icon</h4>
      <Button text={"Remove from Box"}/>
      <Button text={"Add to Calendar"}/>
    </div>
  )
}

export default RecipeShow;
