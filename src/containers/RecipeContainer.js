import React, { Component } from 'react';
import '../css/RecipeContainer.css';
import RecipeShow from '../components/RecipeShow'

class RecipeContainer extends Component {



  generateRecipe = () => {
    // console.log(this.props.foundRecipe);
    return (
      <RecipeShow
        key={this.props.foundRecipe.id}
        recipe={this.props.foundRecipe}
        addRecipeToRecipeBox={this.props.addRecipeToRecipeBox}
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
