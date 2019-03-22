import React, { Component } from 'react';
import '../css/Search.css';
// import { connect } from 'react-redux'

class SearchBar extends Component {


  render(){
    // console.log(this.props);
    return (
      <form >
        <input
          type='text'
          placeholder='Search for Recipes'
          onChange={this.props.filterRecipesBySearchInput}
        />
      </form>
    )
  }


}

export default (SearchBar);
