import React, { Component } from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'
import RecipeShow from '../components/RecipeShow'
import Footer from '../components/Footer'


class RecipeBoxContainer extends Component {

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
      <div>
        <h1> CONTAINER </h1>
        {this.generateRecipeBox()}
        <RecipeShow recipe={this.props.currentRecipeView}/>
      </div>
      <div>
        < Footer />
      </div>
    </div>
  )
}

}

export default RecipeBoxContainer;
