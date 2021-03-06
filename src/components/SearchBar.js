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
          placeholder='Search for Recipes...' data-id={"input"}
          onChange={this.props.clickListener}
        />
        <div className="recipe-icons">
          <div onClick={this.props.clickListener}>
            <Vegan fill={this.props.vegan ? "green" : "black"} width={"50px"} />
          </div>
          <div onClick={this.props.clickListener}>
            <Vegetarian fill={this.props.vegetarian ? "green" : "black"} width={"50px"}/>
          </div>
          <div onClick={this.props.clickListener} >
            <Dairyfree fill={this.props.dairyfree ? "green" : "black"} width={"49px"}/>
          </div>
          <div onClick={this.props.clickListener} >
            <Glutenfree fill={this.props.glutenfree ? "green" : "black"} width={"49px"}/>
          </div>
        </div>

      </form>
    )
  }

}

export default (SearchBar);
