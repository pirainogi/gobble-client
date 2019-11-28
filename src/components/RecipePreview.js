import React from 'react';
import '../css/RecipePreview.css';
import { NavLink } from 'react-router-dom';

import Vegan from '../icons/vegan.js';
import Vegetarian from '../icons/vegetarian.js';
import Glutenfree from '../icons/glutenfree.js';
import Dairyfree from '../icons/dairyfree.js';


const RecipePreview = (props) => {

  //should this be hoisted to app and passed down as a prop instead of writing the same fn twice?
  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  let generateIngredients = () => {
    let recipeingredients = props.recipe.ingredients.map(ingredient =>  ingredient.name)
    let capitalizedRecipes = recipeingredients.map(ingredient => {
      return capitalizeFirstLetter(ingredient)
    })
    return capitalizedRecipes.join(', ')
  }

  // let generateDishCategories = () => {
  //   let dishCategories = props.recipe.dishType.split(',')
  //   let capitalizedCategories = dishCategories.map(dish => { return capitalizeFirstLetter(dish) })
  //   return capitalizedCategories.join(', ')
  // }

  return (
      <div className="recipe-card card-flex-wrapper">
      	<aside>
          <div className='card-flex-image'>
        		<img
              src={props.recipe.imgurl} alt={props.recipe.name}
            />
          </div>
          <div className='card-flex-button'>
            <NavLink to={`/recipes/${props.recipe.id}`} activeClassName='active' id='navlink'>View</NavLink>
          </div>
      	</aside>

        <div className='card-flex-content'>
        	<article>
        		<h2>{props.recipe.name}</h2>

        		<div className="recipe-icons">
        			{props.recipe.glutenFree ?
                <Glutenfree fill={"black"} width={"49px"}/>
                : null }

        			{props.recipe.dairyFree ?
                <Dairyfree fill={"black"} width={"49px"}/>
                : null }

        			{props.recipe.vegetarian ?
                <Vegetarian fill={"black"} width={"50px"}/>
                : null }

              {props.recipe.vegan ?
                <Vegan fill={"black"} width={"50px"} />
                : null }
        		</div>

        		<br></br><p className="ingredients"><span><b>Ingredients:</b> {generateIngredients()}</span></p>
        	</article>
        </div>
      </div>
  )

}

export default RecipePreview;

	// <h3>{generateDishCategories()}</h3>
