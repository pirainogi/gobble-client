import React, { Component } from 'react';
import '../css/RecipeContainer.css';
// import RecipeShow from './RecipeShow'

const RecipeContainer = (props) => {
  console.log('recipecontainer props', props)
  console.log('match params', props.match.params.id);
  const { currentRecipe = [] } = props

  return (
    <div className="recipe-container">
      <h1> RECIPE CONTAINER </h1>
    </div>
  )

}

  // makeRecipes = () => {
  //   return this.state.recipe.map( recipe => {
  //     return <RecipeShow
  //       key={recipe.id}
  //       recipe={recipe}
  //     />
  //   })
  // }



export default (RecipeContainer);

// <RecipeShow recipe={this.state.recipe}/>
