import React, { Component } from 'react';
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
      </form>
    )
  }

}

export default (SearchBar);
