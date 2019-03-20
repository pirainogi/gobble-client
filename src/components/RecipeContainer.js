import React, { Component } from 'react';
import '../css/RecipeContainer.css';
// import RecipeShow from './RecipeShow'

class RecipeContainer extends Component {

  // componentDidMount() {
  //   console.log(this.props.recipes);
  //   if(this.props.recipes.length === 0){
  //     this.props.getrecipes()
  //   }
  //   // this.props.getrecipes()
  // }

  // makeRecipes = () => {
  //   return this.props.recipes.map( recipe => {
  //     return <RecipeShow
  //       key={recipe.id}
  //       recipe={recipe}
  //     />
  //   })
  // }

  render(){
    return (
    <div className="recipe-container">
      <h1> RECIPE CONTAINER </h1>
    </div>
  )}
}

export default (RecipeContainer);
