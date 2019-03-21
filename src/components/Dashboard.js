import React from 'react';
import '../css/Dashboard.css';
import Calendar from './Calendar'
import RecipeBoxPreview from './RecipeBoxPreview'

const Dashboard = (props) => {
console.log(props);

  let generateRecipeBoxPreviews = () => {
    return props.currentRecipebox.map(recipe => {
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
    <div className="dashboard">
      <h1> dashboard </h1>
      <Calendar />
      {generateRecipeBoxPreviews()}
    </div>
  )
}

export default Dashboard;
