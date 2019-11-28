import React, { Component } from 'react';
import '../css/SearchContainer.css';
import SearchBar from '../components/SearchBar';
import RecipePreview from '../components/RecipePreview';

class SearchContainer extends Component {

  state = {
      recipesReturnedFromSearch: [],
      searchValue: '',
      vegan: false,
      vegetarian: false,
      glutenfree: false,
      dairyfree: false,
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
  filterRecipesByInput = () => {
    let searchedRecipes
    if (this.state.searchValue !== ''){
      searchedRecipes = this.state.recipesReturnedFromSearch.filter(recipe => {
        const lowercaseRecipe = recipe.name.toLowerCase()
        const lowerCaseFilter = this.state.searchValue.toLowerCase()
        return lowercaseRecipe.includes(lowerCaseFilter)
      })
      if(this.state.vegan === true){
        searchedRecipes = searchedRecipes.filter(recipe => {
          return recipe.vegan === true
        })
        if(this.state.vegetarian === true){
          searchedRecipes = searchedRecipes.filter(recipe => {
            return recipe.vegetarian === true
          })
          if(this.state.glutenfree === true){
            searchedRecipes = searchedRecipes.filter(recipe => {
              return recipe.glutenFree === true
            })
            if(this.state.dairyfree === true){
              searchedRecipes = searchedRecipes.filter(recipe => {
                return recipe.dairyFree === true
              })
            }
          }
        }
      }
    } else if(this.state.vegan === true) {
      searchedRecipes = this.state.recipesReturnedFromSearch.filter(recipe => {
        return recipe.vegan === true
      })
      if(this.state.vegetarian === true){
        searchedRecipes = searchedRecipes.filter(recipe => {
          return recipe.vegetarian === true
        })
        if(this.state.glutenfree === true){
          searchedRecipes = searchedRecipes.filter(recipe => {
            return recipe.glutenFree === true
          })
          if(this.state.dairyfree === true){
            searchedRecipes = searchedRecipes.filter(recipe => {
              return recipe.dairyFree === true
            })
            if(this.state.searchValue !== ''){
              searchedRecipes = searchedRecipes.filter(recipe => {
                const lowercaseRecipe = recipe.name.toLowerCase()
                const lowerCaseFilter = this.state.searchValue.toLowerCase()
                return lowercaseRecipe.includes(lowerCaseFilter)
              })
            }
          }
        }
      }
    } else {
      searchedRecipes = this.props.recipes
    }
    this.setState({
      recipesReturnedFromSearch: searchedRecipes
    })
  }

  changeDietaryRestrictions = (e) => {
    console.log('this is the button state change', e.target.id);
    this.setState({
      [e.target.id]: !this.state[e.target.id]
    }, this.filterRecipesByInput)
  }

  changeSearchValue = (e) => {
    console.log('this is the search value state change', e.target.value);
    this.setState({
      searchValue: e.target.value
    }, this.filterRecipesByInput)
  }

  //this function will change the local state to reflect the dietary filters
  filterRecipesByDietaryRestriction = () => {
    console.log('hitting the method')
    let currentRecipes, filteredRecipes
    currentRecipes=this.state.recipesReturnedFromSearch
    filteredRecipes = currentRecipes.filter(recipe => {
      return recipe.vegan === true
    })
    this.setState({
      recipesReturnedFromSearch: filteredRecipes
    })
  }

  filterRecipesBySearchInput = () => {
    let currentRecipes, filteredRecipes
    currentRecipes = this.state.recipesReturnedFromSearch
    filteredRecipes = currentRecipes.filter(recipe => {
      const lowercaseRecipe = recipe.name.toLowerCase()
      const lowerCaseFilter = this.state.searchValue.toLowerCase()
      return lowercaseRecipe.includes(lowerCaseFilter)
    })
    this.setState({
      recipesReturnedFromSearch: filteredRecipes
    })
  }

  filterRecipes = (e) => {
    if(e.target.dataset.id === "input"){
      this.changeSearchValue(e)
    } else if(e.target.dataset.id === "button") {
      this.changeDietaryRestrictions(e)
    } else {

    }
  }

  render(){
    console.log('render', this.state.recipesReturnedFromSearch)
    return (
      <div className="search-container">
        <SearchBar filterRecipes={this.filterRecipes} changeSearchValue={this.changeSearchValue} changeDietaryRestrictions={this.changeDietaryRestrictions} vegan={this.state.vegan} vegetarian={this.state.vegetarian} glutenfree={this.state.glutenfree} dairyfree={this.state.dairyfree}/>
        <div className='seached-recipes-container'>
          {this.generateRecipePreview()}
        </div>
      </div>
    )
  }

}

export default (SearchContainer);
