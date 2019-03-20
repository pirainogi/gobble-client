import React, { Component } from 'react';
import '../css/RecipeContainer.css';
import RecipeShow from './RecipeShow'

class RecipeContainer extends Component {


  constructor(props){
    super(props)

    this.state = {
      recipeToDisplay: []
    }
  }

  componentDidMount(){
    console.log('finding recipe');
    if(this.props.recipes.length > 0){
      let foundRecipe =  this.props.recipes.find( recipe => recipe.id === parseInt(this.props.match.params.id) )
      console.log('returned recipe', foundRecipe);
      this.setState({
        recipeToDisplay: foundRecipe
      })
      console.log('recipeToDisplay', this.state.recipeToDisplay);
    }
  }

  // findRecipe() {
  //
  // }

  generateRecipe = () => {
    if(this.state.recipeToDisplay.length !== 0){
      this.state.recipeToDisplay.map(recipe => {
      return (
          <RecipeShow
            key={recipe.id}
            recipe={recipe}
          />
        )
      })
    }
  }

  render(){
    console.log('recipecontainer props', this.props, 'state', this.state)
    console.log('match params', this.props.match.params.id);
    return (
      <div className="recipe-container">
        <h1> RECIPE CONTAINER </h1>
        {this.generateRecipe}
      </div>
    )
  }

}





export default (RecipeContainer);
