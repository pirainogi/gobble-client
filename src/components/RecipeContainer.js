import React, { Component } from 'react';
import '../css/RecipeContainer.css';
import RecipeShow from './RecipeShow'
import { fetchrecipes } from '../action-creators/actions'
import { connect } from 'react-redux'

class RecipeContainer extends Component {

  componentDidMount() {
    console.log(this.props.recipes);
    // if(this.props.recipes.length === 0){
    //   this.props.getrecipes()
    // }
    this.props.getrecipes()
  }

  makeRecipes = () => {
    return this.props.recipes.map( recipe => {
      return <RecipeShow
        key={recipe.id}
        recipe={recipe}
      />
    })
  }

  render(){
    console.log(this.props);
    return (
    <div className="recipe-container">
      <h1> RECIPE CONTAINER </h1>
      {this.makeRecipes()}
    </div>
  )}
}

function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch){
  return {
    getrecipes: () => fetchrecipes(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
