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
          <Vegan fill={"green"} width={"50px"}/>
          <Vegetarian fill={"green"} width={"50px"}/>
          <Dairyfree fill={"green"} width={"50px"}/>
          <Glutenfree fill={"green"} width={"50px"}/>
        </div>

      </form>
    )
  }

}

export default (SearchBar);
