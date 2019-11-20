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
        <div className="recipe-icons">
          <img className="iconboolean" src={process.env.PUBLIC_URL + '/gf-4c.jpg'} alt='gluten-free icon'></img>

          <img className="iconboolean" src={process.env.PUBLIC_URL + '/df-4c.jpg'} alt='dairy-free icon'></img>

          <img className="iconboolean" src={process.env.PUBLIC_URL + '/keto-4c.jpg'} alt='keto icon'></img>

          <img className="iconboolean" src={process.env.PUBLIC_URL + '/whole30_4c.jpg'} alt='whole30 icon'></img>

          <img className="iconboolean" src={process.env.PUBLIC_URL + '/veg-4c.png'} alt='vegetarian icon'></img>

          <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-4c.jpeg'} alt='vegan icon'></img>

          <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-4c.jpg'} alt='healthy icon'></img>
        </div>

      </form>
    )
  }

}

export default (SearchBar);
