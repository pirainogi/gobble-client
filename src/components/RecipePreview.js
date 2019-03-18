import React from 'react';
import '../css/RecipePreview.css';
import Button from './Button'

const RecipePreview = () => {
  return (
    <div className="recipe-preview">
      <h1> RECIPE </h1>
      <h4> heart icons? </h4>
      <p>recipe pic</p>
      <p>recipe instructions</p>
      <Button text={"View"}/>
    </div>
  )
}

export default RecipePreview;
