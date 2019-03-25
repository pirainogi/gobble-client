import React, { Component } from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'
import RecipeShow from '../components/RecipeShow'
import Header from '../components/Header'
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
    <div>
      <Header />
      <div className="recipe-box-container">
          <h1> CONTAINER </h1>
          {this.generateRecipeBox()}
          <RecipeShow recipe={this.props.currentRecipeView}/>
      </div>
      <Footer />
    </div>
  )
}

}

export default RecipeBoxContainer;
