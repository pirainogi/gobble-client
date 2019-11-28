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

  // componentDidMount() {
  //   this.setState({
  //     recipesReturnedFromSearch: this.props.recipes
  //   })
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     recipesReturnedFromSearch: nextProps.recipes
  //   })
  // }

  //push to the recipe's show page
  pushToRecipeShow = (e) => {
    this.props.history.push(`/recipes/${e.target.id}`)
  }

  //map over all of the recipes coming back from state and create preview cards
  generateRecipePreview = () => {
    let filtered = this.searchRecipes()
    console.log('num:', filtered.length)
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

  filterRecipesByInput = () => {
    const restrictions = []
    for(let diet in this.state.restrictions){
      if(this.state.restrictions[diet]){
        restrictions.push(diet)
      }
    }
    return restrictions
  }

  multiDietFilter = (recipes, restrictions) => {
    if(restrictions.length){
      return recipes.filter(recipe => {
        for(const diet of restrictions){
          return recipe[diet] === true
        }
      })
    } else return recipes
  }

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

  changeDietaryRestrictions = (e) => {
    this.setState({
      restrictions: {
        ...this.state.restrictions,
        [e.target.id]: !this.state.restrictions[e.target.id]
      }
    })
  }

  changeSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  clickListener = (e) => {
    if(e.target.dataset.id === "input"){
      this.changeSearchValue(e)
    } else if(e.target.dataset.id === "button") {
      this.changeDietaryRestrictions(e)
    } else {

    }
  }

  render(){
    console.log('recipes:', this.props.recipes, this.state.restrictions)
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


  //if the input field isn't empty, then filter all of the recipes and return those that match, set the returned value in state so they render in the component; otherwise just render all the recipes
  // filterRecipesByInput = () => {
  //   let searchedRecipes
  //   if (this.state.searchValue !== ''){
  //     searchedRecipes = this.state.recipesReturnedFromSearch.filter(recipe => {
  //       const lowercaseRecipe = recipe.name.toLowerCase()
  //       const lowerCaseFilter = this.state.searchValue.toLowerCase()
  //       return lowercaseRecipe.includes(lowerCaseFilter)
  //     })
  //     if(this.state.vegan === true){
  //       searchedRecipes = searchedRecipes.filter(recipe => {
  //         return recipe.vegan === true
  //       })
  //       if(this.state.vegetarian === true){
  //         searchedRecipes = searchedRecipes.filter(recipe => {
  //           return recipe.vegetarian === true
  //         })
  //         if(this.state.glutenfree === true){
  //           searchedRecipes = searchedRecipes.filter(recipe => {
  //             return recipe.glutenFree === true
  //           })
  //           if(this.state.dairyfree === true){
  //             searchedRecipes = searchedRecipes.filter(recipe => {
  //               return recipe.dairyFree === true
  //             })
  //           }
  //         }
  //       }
  //     }
  //   } else if(this.state.vegan === true) {
  //     searchedRecipes = this.state.recipesReturnedFromSearch.filter(recipe => {
  //       return recipe.vegan === true
  //     })
  //     if(this.state.vegetarian === true){
  //       searchedRecipes = searchedRecipes.filter(recipe => {
  //         return recipe.vegetarian === true
  //       })
  //       if(this.state.glutenfree === true){
  //         searchedRecipes = searchedRecipes.filter(recipe => {
  //           return recipe.glutenFree === true
  //         })
  //         if(this.state.dairyfree === true){
  //           searchedRecipes = searchedRecipes.filter(recipe => {
  //             return recipe.dairyFree === true
  //           })
  //           if(this.state.searchValue !== ''){
  //             searchedRecipes = searchedRecipes.filter(recipe => {
  //               const lowercaseRecipe = recipe.name.toLowerCase()
  //               const lowerCaseFilter = this.state.searchValue.toLowerCase()
  //               return lowercaseRecipe.includes(lowerCaseFilter)
  //             })
  //           }
  //         }
  //       }
  //     }
  //   } else {
  //     searchedRecipes = this.props.recipes
  //   }
  //   this.setState({
  //     recipesReturnedFromSearch: searchedRecipes
  //   })
  // }
  //

  //

  //
  // searchRecipes = () => {
  //   console.log('hitting search recipes','current num of recipes:', this.state.recipesReturnedFromSearch.length, this.state.searchValue);
  //   // const filteredRecipes = this.multiDietFilter(this.state.recipesReturnedFromSearch, this.filterRecipesByInput())
  //   let fr, starter
  //   starter = this.state.recipesReturnedFromSearch
  //   fr = starter.filter(recipe => {
  //     const lowercaseRecipe = recipe.name.toLowerCase()
  //     const lowerCaseFilter = this.state.searchValue.toLowerCase()
  //     return lowercaseRecipe.includes(lowerCaseFilter)
  //   })
  //   this.setState({
  //     recipesReturnedFromSearch: fr
  //   }, console.log(this.state.recipesReturnedFromSearch.length, this.state.searchValue))
  // }
  //
  //
  // //this function will change the local state to reflect the dietary filters
  // filterRecipesByDietaryRestriction = () => {
  //   console.log('hitting the method')
  //   let currentRecipes, filteredRecipes
  //   currentRecipes=this.state.recipesReturnedFromSearch
  //   filteredRecipes = currentRecipes.filter(recipe => {
  //     return recipe.vegan === true
  //   })
  //   this.setState({
  //     recipesReturnedFromSearch: filteredRecipes
  //   })
  // }
  //
  // filterRecipesBySearchInput = () => {
  //   let currentRecipes, filteredRecipes
  //   currentRecipes = this.state.recipesReturnedFromSearch
  //   filteredRecipes = currentRecipes.filter(recipe => {
  //     const lowercaseRecipe = recipe.name.toLowerCase()
  //     const lowerCaseFilter = this.state.searchValue.toLowerCase()
  //     return lowercaseRecipe.includes(lowerCaseFilter)
  //   })
  //   this.setState({
  //     recipesReturnedFromSearch: filteredRecipes
  //   })
  // }
  //
