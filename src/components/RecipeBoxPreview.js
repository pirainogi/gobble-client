import React from 'react';
import '../css/RecipeBoxPreview.css';
// import Button from './Button'

const RecipeBoxPreview = (props) => {
  // console.log('recipeboxpreview props', props, 'button should work here');

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
    // <div className="recipe-box-preview">
    //   <h3>{props.recipe.name}</h3>
    //   <img src={props.recipe.imgurl} alt={props.recipe.name} />
    //   <p>Servings: {props.recipe.servings}</p>
    //   <p>Preptime: {props.recipe.preptime} minutes</p>
    //   <p>GF Icon: {props.recipe.glutenFree !== undefined ? props.recipe.glutenFree.toString() : null }</p>
    //   <p>DairyFree Icon: {props.recipe.dairyFree !== undefined ? props.recipe.dairyFree.toString() : null }</p>
    //   <p>W30 Icon: {props.recipe.whole30 !== undefined ? props.recipe.whole30.toString() : null }</p>
    //   <p>Keto Icon: {props.recipe.keto !== undefined ? props.recipe.keto.toString() : null }</p>
    //   <p>Vegan Icon: {props.recipe.vegan !== undefined ? props.recipe.vegan.toString() : null }</p>
    //   <p>Veg Icon: {props.recipe.vegetarian !== undefined ? props.recipe.vegetarian.toString() : null }</p>
    //   <p>Healthy Icon: {props.recipe.healthy !== undefined ? props.recipe.healthy.toString() : null }</p>
    //   <button className='button' id={props.recipe.id} onClick={props.selectRecipePreviewForShow}>view</button>

    <div className="card-flex-wrapper">
      <aside>
        <div className='card-flex-image'>
          <img
            src={props.recipe.imgurl} alt={props.recipe.name}
          />
        </div>
        <div className='card-flex-button'>
          <button className="button" id={props.recipe.id} onClick={props.selectRecipePreviewForShow}>See Full Recipe</button>
        </div>
      </aside>

      <div className='card-flex-content'>
        <article>
          <h2>{props.recipe.name}</h2>
          <h3>{generateDishCategories()}</h3><br></br>

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
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-4c.jpg'} alt='vegan icon'></img>
              : <img className="iconboolean" src={process.env.PUBLIC_URL + '/vegan-gray.jpg'} alt='vegan icon'></img> }

            {props.recipe.healthy ?
              <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-4c.jpg'} alt='healthy icon'></img>
              : <img className="iconboolean" src={process.env.PUBLIC_URL + '/healthy-gray.jpg'} alt='healthy icon'></img> }
          </div>

          <br></br><p className="ingredients"><span><b>Ingredients:</b> {generateIngredients()}</span></p>
        </article>
      </div>
    </div>
  )
}

export default RecipeBoxPreview;
