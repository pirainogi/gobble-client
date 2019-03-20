import React from 'react';
import '../css/RecipeBox.css';
import RecipeBoxPreview from './RecipeBoxPreview'

const RecipeBox = (props) => {
  console.log('recipebox', props);

  let generateRecipeBoxPreviews = () => {
    return props.recipes.map(recipe => {
      return (
        <RecipeBoxPreview
          key={recipe.id}
          recipeID={recipe.id}
        />
      )
    })
  }

  return (
    <div className="recipe-box">
      <h1> RECIPE BOX </h1>
      {generateRecipeBoxPreviews()}
    </div>
  )
}

export default RecipeBox;

      // <Search />
