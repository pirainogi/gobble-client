import React, { Component } from 'react';
import '../css/SearchContainer.css';
import Search from './Search'
import RecipePreview from './RecipePreview'


class SearchContainer extends Component {

  generateRecipePreview = () => {
    return this.props.recipes.map(recipe => {
      return (
        <RecipePreview
          key={recipe.id}
          recipe={recipe}
        />
      )
    })
  }

  render(){
    console.log(this.props);
    return (
      <div className="search-container">
        <h1> CONTAINER </h1>
        <Search/>
        {this.generateRecipePreview()}
      </div>
    )
  }

}

export default (SearchContainer);
