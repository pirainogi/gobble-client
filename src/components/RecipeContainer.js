import React, { Component } from 'react';
import '../css/RecipeContainer.css';
import RecipeShow from './RecipeShow'

class RecipeContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      recipe: []
    }
  }

  // componentDidMount(){
  //   const recipeID = this.props.match.params.id
  //   fetch(`http://localhost:3000/api/v1/recipes/${recipeID}`)
  //   .then(res => res.json())
  //   .then(recipe => {
  //     this.setState({
  //       recipe: recipe
  //     })
  //   })
  // }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/recipes/1')
    .then(res => res.json())
    .then(recipe => {
      this.setState({
        recipe: recipe
      })
    })
  }

  makeRecipes = () => {
    return this.state.recipe.map( recipe => {
      return <RecipeShow
        key={recipe.id}
        recipe={recipe}
      />
    })
  }

  render(){
    console.log(this.state);
    return (
    <div className="recipe-container">
      <h1> RECIPE CONTAINER </h1>
      <RecipeShow recipe={this.state.recipe}/>
    </div>
  )}
}

export default (RecipeContainer);
