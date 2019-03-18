import React from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'
import RecipeShow from './RecipeShow'


const RecipeBoxContainer = () => {
  return (
    <div className="recipe-box-container">
      <h1> CONTAINER </h1>
      <RecipeBox />
      <RecipeShow />
    </div>
  )
}

export default RecipeBoxContainer;
