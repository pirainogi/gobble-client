import React, { Component } from 'react';
import '../css/SearchContainer.css';
import Search from './Search'
import RecipePreview from './RecipePreview'
import { connect } from 'react-redux'


class SearchContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      searchInput: ''
    }
  }

  onSearchInput = (e) => {
    // console.log('here');
    this.setState({
      searchInput: e.target.value
    })
  }

  render(){
    console.log(this.state.searchInput, this.props);
    return (
      <div className="search-container">
        <h1> CONTAINER </h1>
        <Search
          input={this.state.searchInput} onSearchInput={this.onSearchInput}
        />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(SearchContainer);
