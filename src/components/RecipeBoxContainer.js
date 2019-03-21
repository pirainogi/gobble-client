import React, { Component } from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'
import RecipeShow from './RecipeShow'


class RecipeBoxContainer extends Component {

  generateRecipeBox = () => {
    console.log('recipebox container: recipes', this.props.foundRecipe);
    return (
      <RecipeBox
        key={'recipebox'}
        recipes={this.props.currentRecipebox}
        currentRecipeView={this.props.currentRecipeView}
        selectRecipePreviewForShow={this.props.selectRecipePreviewForShow}
      />
    )
  }

  render(){
    return (
    <div className="recipe-box-container">
      <h1> CONTAINER </h1>
      {this.generateRecipeBox()}
      <RecipeShow recipe={this.props.currentRecipeView}/>
    </div>
  )
}

}

export default RecipeBoxContainer;
