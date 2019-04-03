import React from 'react';
import '../css/RecipeShow.css';
import Button from './Button'
import { NavLink } from 'react-router-dom';

// function displayIngredients(ingredients) {
//   for(let i of ingredients){
//     return i.name
//   }
// }

const RecipeShow = (props) => {
  // console.log('recipe container', props);
  //
  // let capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1)
  // }
  //
  // let generateIngredients = () => {
  //   let recipeingredients = props.recipe.ingredients.map(ingredient =>  ingredient.name)
  //   // console.log(recipeingredients);
  //   let capitalizedRecipes = recipeingredients.map(ingredient => {
  //     return capitalizeFirstLetter(ingredient)
  //   })
  //   // console.log(recipeingredients);
  //   return capitalizedRecipes.join(', ')
  // }
  //
  // let generateDishCategories = () => {
  //   let dishCategories = props.recipe.dishType.split(',')
  //   // console.log(dishCategories);
  //   let capitalizedCategories = dishCategories.map(dish => { return capitalizeFirstLetter(dish) })
  //   // console.log(capitalizedCategories);
  //   return capitalizedCategories.join(', ')
  //
  // }

  return (
    props.recipe ?
      <div className={props.addRecipeToRecipeBox ? "recipe-from-search" : "recipe-show" } id={props.recipe.id}>
        <h1>{props.recipe.name}</h1>
        <img src={props.recipe.imgurl} alt={props.recipe.name} />
        <p> <b>Servings:</b> {props.recipe.servings}<br></br>
        <b>Prep Time:</b> {props.recipe.preptime} minutes<br></br>
        <b>Ingredients:</b><br></br>
        <b>Instructions:</b> {props.recipe.instructions}<br></br>
        <b>Source:</b> <a href={props.recipe.sourceUrl}> {props.recipe.sourceUrl}</a></p>

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
        {props.addRecipeToRecipeBox ?
          <div>
            <button className='button' onClick={ () => props.addRecipeToRecipeBox(props.recipe.id)}>Add to Box</button>
            <NavLink to='/recipebox' activeClassName='active' id='navlink' className="button">Go to RecipeBox</NavLink>
            <NavLink to='/search' activeClassName='active' id='navlink' className="button">Return to Search</NavLink>
          </div>
          : null}
      </div>
    :
      <div className="recipe-show" >
        <h1>loading dat recipe </h1>
        <button className='button'>Add to Box</button>
        <Button text={"Add to Calendar"}/>
      </div>
  )
}

export default RecipeShow;


// (e) => props.addRecipeToRecipeBox
// <p>Dish Types: {props.recipe.dishType.split(",").join(", ")}</p>
