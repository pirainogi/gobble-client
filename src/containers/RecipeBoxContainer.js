import React, { Component } from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'
import RecipeShow from '../components/RecipeShow'
// import Header from '../components/Header'
// import Footer from '../components/Footer'


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
    // console.log(this.props);
    return (
    <div className="recipe-box-container">
      {this.generateRecipeBox()}
      <div className="recipe-show-container">
        <RecipeShow recipe={this.props.currentRecipeView}/>
      </div>
    </div>
  )
}

}

export default RecipeBoxContainer;
