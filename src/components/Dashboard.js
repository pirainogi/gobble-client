import React from 'react';
import '../css/Dashboard.css';
import Calendar from './Calendar'
import RecipeBoxPreview from './RecipeBoxPreview'
import Header from './Header'
import Footer from './Footer'

const Dashboard = (props) => {
// console.log(props);

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
      <div>
        <h1> dashboard </h1>
        {generateRecipeBoxPreviews()}
      </div>
    </div>
  )
}

export default Dashboard;

// <Calendar />
