import React from 'react';
import '../css/RecipePreview.css';
import { NavLink } from 'react-router-dom';


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
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/gf-4c.jpg'} alt='gluten-free icon'></img>
                : null }


        			{props.recipe.dairyFree ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/df-4c.jpg'} alt='dairy-free icon'></img>
                : null }

        			{props.recipe.keto ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/keto-4c.jpg'} alt='keto icon'></img>
                : null }

              {props.recipe.whole30 ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/whole30_4c.jpg'} alt='whole30 icon'></img>
                : null }

        			{props.recipe.vegetarian ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/veg-4c.png'} alt='vegetarian icon'></img>
                : null }

              {props.recipe.vegan ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-4c.jpeg'} alt='vegan icon'></img>
                : null }

              {props.recipe.healthy ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-4c.jpg'} alt='healthy icon'></img>
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
