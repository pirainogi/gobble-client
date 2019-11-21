import React, { Component } from 'react';
import Vegan from '../icons/vegan.js';
import Vegetarian from '../icons/vegetarian.js';
import Glutenfree from '../icons/glutenfree.js';
import Dairyfree from '../icons/dairyfree.js';
import '../css/Search.css';

class SearchBar extends Component {

  render(){
    return (
      <form className="search">
        <input
          type='text'
          placeholder='Search for Recipes...'
          onChange={this.props.filterRecipesBySearchInput}
        />
        <div className="recipe-icons">
          <div onClick={this.props.filterRecipesByDietaryRestriction}>
            <Vegan fill={this.props.vegan ? "green" : "black"} width={"50px"} />
          </div>
          <div onClick={this.props.filterRecipesByDietaryRestriction}>
            <Vegetarian fill={this.props.vegetarian ? "green" : "black"} width={"50px"}/>
          </div>
          <div onClick={this.props.filterRecipesByDietaryRestriction}>
            <Dairyfree fill={this.props.dairyfree ? "green" : "black"} width={"49px"}/>
          </div>
          <div onClick={this.props.filterRecipesByDietaryRestriction}>
            <Glutenfree fill={this.props.glutenfree ? "green" : "black"} width={"49px"}/>
          </div>
        </div>

      </form>
    )
  }

}

export default (SearchBar);
