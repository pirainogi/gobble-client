import React, { Component } from 'react';
import '../css/SearchContainer.css';
import SearchBar from '../components/SearchBar';
import RecipePreview from '../components/RecipePreview';

class SearchContainer extends Component {

  state = {
    searchValue: '',
    restrictions: {
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      dairyFree: false,
    }
  }

  componentDidMount() {
    if(this.props.user_vegan){
      this.setState({
        restrictions: {
          ...this.state.restrictions,
          vegan: true
        }
      })
    } if(this.props.user_veg){
      this.setState({
        restrictions: {
          ...this.state.restrictions,
          vegetarian: true
        }
      })
    } if(this.props.user_gf){
      this.setState({
        restrictions: {
          ...this.state.restrictions,
          glutenFree: true
        }
      })
    } if(this.props.user_df){
      this.setState({
        restrictions: {
          ...this.state.restrictions,
          dairyFree: true
        }
      })
    }
  }

  //push to the recipe's show page
  pushToRecipeShow = (e) => {
    this.props.history.push(`/recipes/${e.target.id}`)
  }

  //map over all of the filtered recipes from the searcn fn and create preview cards
  generateRecipePreview = () => {
    let filtered = this.searchRecipes()
    if(filtered.length){
      return filtered.map(recipe => {
        return (
          <RecipePreview
            key={recipe.id}
            recipe={recipe}
            pushToRecipeShow={this.pushToRecipeShow}
          />
        )
      })
    }
  }

  //create  an array of the selected dietary restriction filters
  filterRecipesByInput = () => {
    const restrictions = []
    for(let diet in this.state.restrictions){
      if(this.state.restrictions[diet]){
        restrictions.push(diet)
      }
    }
    return restrictions
  }

  //takes in all of the recipes and the restriction array, and if there are any restrictions, filter for the recipes that fulfill the restrictions
  multiDietFilter = (recipes, restrictions) => {
    if(restrictions.length){
      return recipes.filter(recipe => {
        for(const diet of restrictions){
          return recipe[diet] === true
        }
      })
    } else return recipes
  }

  //first run the multiDietFilter fn and then further filter those by the search input value
  searchRecipes = () => {
    const filteredRecipes = this.multiDietFilter(
      this.props.recipes,
      this.filterRecipesByInput()
    )
    return filteredRecipes.filter(recipe => {
      return recipe.name
      .toLowerCase()
      .includes(this.state.searchValue.toLowerCase())
    })
  }

  //change the state to reflect whether a dietary restriction has been selected (or deselected)
  changeDietaryRestrictions = (e) => {
    this.setState({
      restrictions: {
        ...this.state.restrictions,
        [e.target.id]: !this.state.restrictions[e.target.id]
      }
    })
  }

  //change the state to reflect search form input
  changeSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  //for either de/selection of a restriction or input for the search, call the appropriate fn to update state
  clickListener = (e) => {
    if(e.target.dataset.id === "input"){
      this.changeSearchValue(e)
    } else if(e.target.dataset.id === "button") {
      this.changeDietaryRestrictions(e)
    }
  }

  render(){
    console.log(this.state);
    return (
      <div className="search-container">
        <SearchBar clickListener={this.clickListener} vegan={this.state.restrictions.vegan} vegetarian={this.state.restrictions.vegetarian} glutenfree={this.state.restrictions.glutenFree} dairyfree={this.state.restrictions.dairyFree}/>
        <div className='seached-recipes-container'>
          {this.generateRecipePreview()}
        </div>
      </div>
    )
  }

}

export default (SearchContainer);
