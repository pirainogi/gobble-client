import React, { Component } from 'react';
import '../css/SearchContainer.css';
import SearchBar from '../components/SearchBar';
import RecipePreview from '../components/RecipePreview';

class SearchContainer extends Component {

  state = {
      recipesReturnedFromSearch: []
    }

  componentDidMount() {
    this.setState({
      recipesReturnedFromSearch: this.props.recipes
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      recipesReturnedFromSearch: nextProps.recipes
    })
  }

  //push to the recipe's show page
  pushToRecipeShow = (e) => {
    this.props.history.push(`/recipes/${e.target.id}`)
  }

  //map over all oof the recipes coming back from state and create preview cards
  generateRecipePreview = () => {
    return this.state.recipesReturnedFromSearch.map(recipe => {
      return (
        <RecipePreview
          key={recipe.id}
          recipe={recipe}
          pushToRecipeShow={this.pushToRecipeShow}
        />
      )
    })
  }

  //if the input field isn't empty, then filter all of the recipes and return those that match, set the returned value in state so they render in the component; otherwise just render all the recipes
  filterRecipesBySearchInput = (e) => {
    let currentRecipes = []
    let searchedRecipes = []

    if (e.target.value !== ''){
      currentRecipes = this.props.recipes
      searchedRecipes = currentRecipes.filter(recipe => {
        const lowercaseRecipe = recipe.name.toLowerCase()
        const lowerCaseFilter = e.target.value.toLowerCase()
        return lowercaseRecipe.includes(lowerCaseFilter)
      })
    } else {
      searchedRecipes = this.props.recipes
    }
    this.setState({
      recipesReturnedFromSearch: searchedRecipes
    })
  }

  render(){
    return (
      <div className="search-container">
        <SearchBar filterRecipesBySearchInput={this.filterRecipesBySearchInput}/>
        <div className='seached-recipes-container'>
          {this.generateRecipePreview()}
        </div>
      </div>
    )
  }

}

export default (SearchContainer);
