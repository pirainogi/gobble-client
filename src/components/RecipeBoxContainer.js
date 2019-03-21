import React, { Component } from 'react';
import '../css/RecipeBoxContainer.css';
import RecipeBox from './RecipeBox'
import RecipeShow from './RecipeShow'


class RecipeBoxContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      currentRecipeView: {}
    }
  }

  selectRecipePreviewForShow = (e) => {
    // console.log(e.target.id);
    let recipeToView = this.props.currentRecipebox.find(recipe => recipe.id === parseInt(e.target.id))
    // console.log(recipeToView);
    this.setState({
      currentRecipeView: recipeToView
    })
  }

  generateRecipeBox = () => {
    // console.log(this.props.foundRecipe);
    return (
      <RecipeBox
        key={'recipebox'}
        recipes={this.props.currentRecipebox}
        currentRecipeView={this.state.currentRecipeView}
        selectRecipePreviewForShow={this.selectRecipePreviewForShow}
      />
    )
  }

  render(){
    return (
    <div className="recipe-box-container">
      <h1> CONTAINER </h1>
      {this.generateRecipeBox()}
      <RecipeShow recipe={this.state.currentRecipeView}/>
    </div>
  )
}

}

export default RecipeBoxContainer;
