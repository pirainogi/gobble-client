import React from 'react';
import '../css/RecipeShow.css';
import Button from './Button'

// function displayIngredients(ingredients) {
//   for(let i of ingredients){
//     return i.name
//   }
// }

const RecipeShow = (props) => {
  console.log('recipe container', props);
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
        <p> <b>Servings:</b> {props.recipe.servings}</p>
        <p> <b>Prep Time:</b> {props.recipe.preptime} minutes </p>
        <p> <b>Ingredients:</b> </p>
        <p> <b>Instructions:</b> {props.recipe.instructions} </p>
        <p> <b>Source:</b> <a href={props.recipe.sourceUrl}> {props.recipe.sourceUrl}</a></p>

        <div className="recipe-icons">
          {props.recipe.glutenFree ?
            <img className="iconboolean" src={process.env.PUBLIC_URL + '/gf-4c.jpg'} alt='gluten-free icon'></img>
            : <img className="iconboolean" src={process.env.PUBLIC_URL + '/gf-gray.jpg'} alt='gluten-free icon'></img> }


          {props.recipe.dairyFree ?
            <img className="iconboolean" src={process.env.PUBLIC_URL + '/df-4c.jpg'} alt='dairy-free icon'></img>
            : <img className="iconboolean" src={process.env.PUBLIC_URL + '/df-gray.jpg'} alt='dairy-free icon'></img> }

          {props.recipe.keto ?
            <img className="iconboolean" src={process.env.PUBLIC_URL + '/keto-4c.jpg'} alt='keto icon'></img>
            : <img className="iconboolean" src={process.env.PUBLIC_URL + '/keto-gray.jpg'} alt='keto icon'></img> }

          {props.recipe.whole30 ?
            <img className="iconboolean" src={process.env.PUBLIC_URL + '/whole30_4c.jpg'} alt='whole30 icon'></img>
            : <img className="iconboolean" src={process.env.PUBLIC_URL + '/whole30_gray.jpg'} alt='whole30 icon'></img> }

          {props.recipe.vegetarian ?
            <img className="iconboolean" src={process.env.PUBLIC_URL + '/veg-4c.png'} alt='vegetarian icon'></img>
            : <img className="iconboolean" src={process.env.PUBLIC_URL + '/veg-gray.jpg'} alt='vegetarian icon'></img> }

          {props.recipe.vegan ?
            <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-4c.jpeg'} alt='vegan icon'></img>
            : <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-gray.jpg'} alt='vegan icon'></img> }

          {props.recipe.healthy ?
            <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-4c.jpg'} alt='healthy icon'></img>
            : <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-gray.jpg'} alt='healthy icon'></img> }
        </div>
        {props.addRecipeToRecipeBox ? <button className='button' onClick={ () => props.addRecipeToRecipeBox(props.recipe.id)}>Add to Box</button> : null}
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
