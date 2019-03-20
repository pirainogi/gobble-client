import React, { Component } from 'react';
import '../css/SearchContainer.css';
import Search from './Search'
import RecipePreview from './RecipePreview'


class SearchContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      searchInput: ''
    }
  }

  // onSearchInput = (e) => {
  //   // console.log('here');
  //   this.setState({
  //     searchInput: e.target.value
  //   })
  // }

  render(){
    return (
      <div className="search-container">
        <h1> CONTAINER </h1>
        <Search/>
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
      </div>
    )
  }

}

export default (SearchContainer);
