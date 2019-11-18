import React, { Component } from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'
import RecipeShow from '../components/RecipeShow'

class RecipeBoxContainer extends Component {

  //what is this doing?? why not just have it render the recipe box component in the render?
  generateRecipeBox = () => {
    // console.log('recipebox container: recipes', this.props.foundRecipe);
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
        {this.generateRecipeBox()}
        <div className="recipe-show-container">
          <RecipeShow recipe={this.props.currentRecipeView} />
        </div>
      </div>
    )
  }

}

export default RecipeBoxContainer;
