import React, { Component } from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'


class RecipeBoxContainer extends Component {

  generateRecipeBox = () => {
    // console.log(this.props.foundRecipe);
    return (
      <RecipeBox
        key={'recipebox'}
        recipes={this.props.currentRecipebox}
      />
    )
  }

  render(){
    return (
    <div className="recipe-box-container">
      <h1> CONTAINER </h1>
      {this.generateRecipeBox()}
      <h1>RecipeShow</h1>
    </div>
  )
}

}

export default RecipeBoxContainer;
