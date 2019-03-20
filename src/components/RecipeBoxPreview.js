import React from 'react';
import '../css/RecipeBoxPreview.css';
import Button from './Button'

const RecipeBoxPreview = (props) => {
  console.log('recipeboxpreview', props);
  return (
    <div className="recipe-box-preview">
      <h1> recipebox preview here </h1>
      <button className='button'>view</button>
    </div>
  )
}

export default RecipeBoxPreview;
