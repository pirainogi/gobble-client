import React from 'react';
import '../css/SearchContainer.css';
import Search from './Search'
import RecipePreview from './RecipePreview'


const SearchContainer = () => {
  return (
    <div className="search-container">
      <h1> CONTAINER </h1>
      <Search /> 
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
    </div>
  )
}

export default SearchContainer;
