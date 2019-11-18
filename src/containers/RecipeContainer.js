import React, { Component } from 'react';
import '../css/RecipeContainer.css';
import RecipeShow from '../components/RecipeShow'

class RecipeContainer extends Component {

  //same question here, why not just have this in the render?
  generateRecipe = () => {
    return (
      <RecipeShow
        key={this.props.foundRecipe.id}
        recipe={this.props.foundRecipe}
        addRecipeToRecipeBox={this.props.addRecipeToRecipeBox}
        grabRecipeForEvent={this.props.grabRecipeForEvent}
      />
    )
  }

  render(){
    return (
      <div className="recipe-container">
        {this.generateRecipe()}
      </div>
    )
  }

}





export default (RecipeContainer);
