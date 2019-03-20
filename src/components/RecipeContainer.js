import React, { Component } from 'react';
import '../css/RecipeContainer.css';
import RecipeShow from './RecipeShow'

class RecipeContainer extends Component {

  pushToRecipeBox = (e) => {
    console.log('pushing add button', e.target);
    // this.props.history.push(`/recipes/${e.target.id}`)
  }

  generateRecipe = () => {
    // console.log(this.props.foundRecipe);
    return (
      <RecipeShow
        key={this.props.foundRecipe.id}
        recipe={this.props.foundRecipe}
        pushToRecipeBox={this.pushToRecipeBox}
      />
    )
  }



  render(){
    // console.log('recipecontainer props', this.props)
    // console.log('match params', this.props.match.params.id);
    return (
      <div className="recipe-container">
        <h1> RECIPE CONTAINER </h1>
        {this.generateRecipe()}
      </div>
    )
  }

}





export default (RecipeContainer);
