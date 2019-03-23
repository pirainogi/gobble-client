import React from 'react';
import '../css/RecipePreview.css';
// import '../css/Button.css';


const RecipePreview = (props) => {
  // console.log(props);

  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  let generateIngredients = () => {
    let recipeingredients = props.recipe.ingredients.map(ingredient =>  ingredient.name)
    // console.log(recipeingredients);
    let capitalizedRecipes = recipeingredients.map(ingredient => {
      return capitalizeFirstLetter(ingredient)
    })
    // console.log(recipeingredients);
    return capitalizedRecipes.join(', ')
  }

  let generateDishCategories = () => {
    let dishCategories = props.recipe.dishType.split(',')
    // console.log(dishCategories);
    let capitalizedCategories = dishCategories.map(dish => { return capitalizeFirstLetter(dish) })
    // console.log(capitalizedCategories);
    return capitalizedCategories.join(', ')

  }

  return (
    <div className='card-flex-item'>
      <div className="recipe-card card-flex-wrapper">
      	<aside>
          <div className='card-flex-image'>
        		<img
              src={props.recipe.imgurl} alt={props.recipe.name}
            />
          </div>
          <div className='card-flex-button'>
      		  <a href="#" className="button">View</a>
          </div>
      	</aside>

        <div className='card-flex-content'>
        	<article>
        		<h2>{props.recipe.name}</h2>
        		<h3>{generateDishCategories()}</h3>

        		<ul>
        			<li>glutenfree: {props.recipe.glutenFree.toString()}</li>
        			<li>dairyfree: {props.recipe.dairyFree.toString()}</li>
        			<li>keto: {props.recipe.keto.toString()}</li>
        			<li>vegetarian: {props.recipe.vegetarian.toString()}</li>
              <li>vegan: {props.recipe.vegan.toString()}</li>
              <li>healthy: {props.recipe.healthy.toString()}</li>
        		</ul>

        		<p className="ingredients"><span>Ingredients:&nbsp; {generateIngredients()}</span></p>
        	</article>
        </div>

      </div>
    </div>
  )

}

export default RecipePreview;
//
// <div className="recipe-card">
//   <aside>
//     <img src={props.recipe.imgurl} alt={props.recipe.name}/>
//     <button className='button' id={props.recipe.id} onClick={props.pushToRecipeShow}>View</button>
//   </aside>
//
//   <details>
//     <h2> {props.recipe.name} </h2>
//
//     <ul>
//       <li>glutenfree: {props.recipe.glutenFree.toString()}</li>
//       <li>dairyfree: {props.recipe.dairyFree.toString()}</li>
//       <li>keto: {props.recipe.keto.toString()}</li>
//       <li>vegetarian: {props.recipe.vegetarian.toString()}</li>
//       <li>vegan: {props.recipe.vegan.toString()}</li>
//       <li>healthy: {props.recipe.healthy.toString()}</li>
//     </ul>
//
//
//   </details>
// </div>
