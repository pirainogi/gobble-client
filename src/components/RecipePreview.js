import React from 'react';
import '../css/RecipePreview.css';
// import '../css/Button.css';


const RecipePreview = (props) => {
  console.log(props);

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
        			<li>{props.recipe.glutenFree ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/gf-4c.jpg'} alt='gluten-free icon'></img>
                : <img className="iconboolean" src={process.env.PUBLIC_URL + '/gf-gray.jpg'} alt='gluten-free icon'></img> }
              </li>

        			<li>{props.recipe.dairyFree ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/df-4c.jpg'} alt='dairy-free icon'></img>
                : <img className="iconboolean" src={process.env.PUBLIC_URL + '/df-gray.jpg'} alt='dairy-free icon'></img> }
              </li>

        			<li>{props.recipe.keto ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/keto-4c.jpg'} alt='keto icon'></img>
                : <img className="iconboolean" src={process.env.PUBLIC_URL + '/keto-gray.jpg'} alt='keto icon'></img> }
              </li>

              <li>{props.recipe.whole30 ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/whole30_4c.jpg'} alt='whole30 icon'></img>
                : <img className="iconboolean" src={process.env.PUBLIC_URL + '/whole30_gray.jpg'} alt='whole30 icon'></img> }
              </li>

        			<li>{props.recipe.vegetarian ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/veg-4c.png'} alt='vegetarian icon'></img>
                : <img className="iconboolean" src={process.env.PUBLIC_URL + '/veg-gray.jpg'} alt='vegetarian icon'></img> }
                </li>

              <li>{props.recipe.vegan ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-4c.jpg'} alt='vegan icon'></img>
                : <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-gray.jpg'} alt='vegan icon'></img> }
              </li>

              <li>{props.recipe.healthy ?
                <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-4c.jpg'} alt='healthy icon'></img>
                : <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-gray.jpg'} alt='healthy icon'></img> }
              </li>
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
