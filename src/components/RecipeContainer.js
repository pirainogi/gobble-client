import React from 'react';
import '../css/RecipeContainer.css';
import RecipeShow from './RecipeShow'


const RecipeContainer = () => {
  return (
    <div className="recipe-container">
      <h1> RECIPE CONTAINER </h1>
      <RecipeShow />
    </div>
  )
}

export default RecipeContainer;
