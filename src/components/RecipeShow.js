import React, { Component }  from 'react';
import '../css/RecipeShow.css';
import Button from './Button';
import EventModal from './EventModal';
import { NavLink } from 'react-router-dom';

class RecipeShow extends Component {
  // console.log('recipe container', this.props);
  //

  state = {
    showModal: false,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  generateIngredients = () => {
    let recipeingredients = this.props.recipe.ingredients.map(ingredient => {
      return ingredient.name
    })
    // console.log(recipeingredients);
    let capitalizedRecipes = recipeingredients.map(ingredient => {
      return this.capitalizeFirstLetter(ingredient)
    })
    // console.log(recipeingredients);
    return capitalizedRecipes.join(', ')
  }
  //
  // let generateDishCategories = () => {
  //   let dishCategories = this.props.recipe.dishType.split(',')
  //   // console.log(dishCategories);
  //   let capitalizedCategories = dishCategories.map(dish => { return capitalizeFirstLetter(dish) })
  //   // console.log(capitalizedCategories);
  //   return capitalizedCategories.join(', ')
  //
  // }

  showEventsModal = () => {
    this.setState({
      showModal: true,
    })
  }

  hideEventsModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div>
      { this.props.recipe ?
        <div className={this.props.addRecipeToRecipeBox ? "recipe-from-search" : "recipe-show" } id={this.props.recipe.id}>
          <h1>{this.props.recipe.name}</h1>
          <img src={this.props.recipe.imgurl} alt={this.props.recipe.name} />
          <p> <b>Servings:</b> {this.props.recipe.servings}
          <b>    Prep Time:</b> {this.props.recipe.preptime} minutes<br></br>
          <b>Ingredients:</b> <br></br>
          <b>Instructions:</b> {this.props.recipe.instructions}<br></br>
          <b>Source:</b> <a href={this.props.recipe.sourceUrl}> {this.props.recipe.sourceUrl}</a></p>

          <div className="recipe-icons">
            {this.props.recipe.glutenFree ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/gf-4c.jpg'} alt='gluten-free icon'></img>
              : null }


            {this.props.recipe.dairyFree ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/df-4c.jpg'} alt='dairy-free icon'></img>
              : null }

            {this.props.recipe.keto ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/keto-4c.jpg'} alt='keto icon'></img>
              : null }

            {this.props.recipe.whole30 ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/whole30_4c.jpg'} alt='whole30 icon'></img>
              : null }

            {this.props.recipe.vegetarian ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/veg-4c.png'} alt='vegetarian icon'></img>
              : null }

            {this.props.recipe.vegan ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-4c.jpeg'} alt='vegan icon'></img>
              : null }

            {this.props.recipe.healthy ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-4c.jpg'} alt='healthy icon'></img>
              : null }
          </div>
          {this.props.addRecipeToRecipeBox ?
            <div>
              <button className='button' onClick={ () => this.props.addRecipeToRecipeBox(this.props.recipe.id)}>Add to Box</button>
              <NavLink to='/recipebox' activeClassName='active' id='navlink' className="button">Go to RecipeBox</NavLink>
              <NavLink to='/search' activeClassName='active' id='navlink' className="button">Return to Search</NavLink>
              <button className='button' onClick={ () => console.log('click')}>Add to Calendar</button>
            </div>
            : null}
        </div>
      :
        <div className="recipe-show" >
          <h1>loading dat recipe </h1>
          <button className='button'>Add to Box</button>
          <Button text={"Add to Calendar"}/>
        </div>
      }
      </div>
    )
  }
}

export default RecipeShow;


// (e) => this.props.addRecipeToRecipeBox
// <p>Dish Types: {this.props.recipe.dishType.split(",").join(", ")}</p>
