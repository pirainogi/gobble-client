import React, { Component }  from 'react';
import '../css/RecipeShow.css';
import { NavLink } from 'react-router-dom';

import Vegan from '../icons/vegan.js';
import Vegetarian from '../icons/vegetarian.js';
import Glutenfree from '../icons/glutenfree.js';
import Dairyfree from '../icons/dairyfree.js';

class RecipeShow extends Component {

  // state = {
  //   ingredients: []
  // }
  //
  // componentDidMount(){
  //   this.grabIngredients()
  // }
  //
  // grabIngredients = () => { return this.props.recipe ? this.generateIngredients() : null }
  //
  // //
  // capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1)
  // }
  //
  // generateIngredients = () => {
  //   let recipeingredients = this.props.recipe.ingredients.map(ingredient => {
  //     return ingredient.name
  //   })
  //   // console.log(recipeingredients);
  //   let capitalizedRecipes = recipeingredients.map(ingredient => {
  //     return this.capitalizeFirstLetter(ingredient)
  //   })
  //   let joinedRecipes = capitalizedRecipes.join(', ')
  //
  //   this.setState({
  //     ingredients: joinedRecipes
  //   })
  //   // console.log(recipeingredients);
  // }
  // //
  // let generateDishCategories = () => {
  //   let dishCategories = this.props.recipe.dishType.split(',')
  //   let capitalizedCategories = dishCategories.map(dish => { return capitalizeFirstLetter(dish) })
  //   return capitalizedCategories.join(', ')
  //
  // }

  render() {
    return (
      <div>
      { this.props.recipe ?
        <div className={this.props.addRecipeToRecipeBox ? "recipe-from-search" : "recipe-show" } id={this.props.recipe.id}>
          <h1>{this.props.recipe.name}</h1>
          <div className="recipe-img">
            <img src={this.props.recipe.imgurl} alt={this.props.recipe.name} />
          </div>
          <div className="recipe-icons">

            {this.props.recipe.glutenFree ?
              <Glutenfree fill={"black"} width={"49px"}/>
              : null }

            {this.props.recipe.dairyFree ?
              <Dairyfree fill={"black"} width={"49px"}/>
              : null }

            {this.props.recipe.vegetarian ?
              <Vegetarian fill={"black"} width={"50px"}/>
              : null }

            {this.props.recipe.vegan ?
              <Vegan fill={"black"} width={"50px"} />
              : null }
          </div>
          <p>
            <b>Servings:</b> {this.props.recipe.servings}<br></br>
            <b>Prep Time:</b> {this.props.recipe.preptime} minutes<br></br>
            <b>Instructions:</b> {this.props.recipe.instructions}<br></br>
            <b>Source:</b> <a href={this.props.recipe.sourceUrl} target="_blank" rel="noopener noreferrer"> {this.props.recipe.sourceUrl}</a>
          </p>

          {this.props.addRecipeToRecipeBox ?
            <div className="button-group">
              <button className='button' onClick={ () => this.props.addRecipeToRecipeBox(this.props.recipe.id)}>Add to Box</button><br></br>
              <NavLink to='/recipebox' activeClassName='active' id='navlink' className="button">Go to RecipeBox</NavLink><br></br>
              <NavLink to='/search' activeClassName='active' id='navlink' className="button">Return to Search</NavLink>
              <button onClick={() => this.props.grabRecipeForEvent(this.props.recipe)} className='button'>Add to Calendar</button>
            </div>
            : null}
        </div>
      :
        <div className="recipe-show" >
          <h1>loading dat recipe </h1>
          <button className='button'>Add to Box</button>
        </div>
      }
      </div>
    )
  }
}

export default RecipeShow;


// (e) => this.props.addRecipeToRecipeBox
// <p>Dish Types: {this.props.recipe.dishType.split(",").join(", ")}</p>
// <b>Ingredients:</b>{this.state.ingredients}<br></br>
