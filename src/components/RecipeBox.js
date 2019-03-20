import React from 'react';
import '../css/RecipeBox.css';
// import Search from './Search'
import RecipePreview from './RecipePreview'

const RecipeBox = () => {
  return (
    <div className="recipe-box">
      <h1> RECIPE BOX </h1>
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
    </div>
  )
}

export default RecipeBox;

      // <Search />
