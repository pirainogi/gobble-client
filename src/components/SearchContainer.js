import React, { Component } from 'react';
import '../css/SearchContainer.css';
import Search from './Search'
import RecipePreview from './RecipePreview'
import { Link } from 'react-router-dom'


class SearchContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      recipesReturnedFromSearch: []
    }
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

  pushToRecipeShow = () => {
    console.log('pushing view button');
    this.props.
  }

  generateRecipePreview = () => {
    // console.log('making recipes', this.state.recipesReturnedFromSearch);
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

  filterRecipesBySearchInput = (e) => {
    let currentRecipes = []
    let searchedRecipes = []

    if (e.target.value !== ''){
      currentRecipes = this.props.recipes
      // console.log('currentRecipes', currentRecipes);
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
    // console.log('should have filtered', this.state.recipesReturnedFromSearch);
  }


  render(){
    // console.log('filtered recipes', this.state.recipesReturnedFromSearch);
    return (
      <div className="search-container">
        <h1> CONTAINER </h1>
        <Search filterRecipesBySearchInput={this.filterRecipesBySearchInput}/>
        {this.generateRecipePreview()}
      </div>
    )
  }

}

export default (SearchContainer);
