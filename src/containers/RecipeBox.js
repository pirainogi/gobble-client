import React from 'react';
import '../css/RecipeBox.css'
import RecipeBoxPreview from '../components/RecipeBoxPreview'

const RecipeBox = (props) => {
  // console.log('recipebox props', props);

  let generateRecipeBoxPreviews = () => {
    return props.recipes.map(recipe => {
      return (
        <RecipeBoxPreview
          key={recipe.id}
          recipe={recipe}
          selectRecipePreviewForShow={props.selectRecipePreviewForShow}
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
