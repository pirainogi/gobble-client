import { GET_RECIPES } from '../types'

const RecipeAPI = 'http://localhost:3000/api/v1/recipes'

export function fetchrecipes(dispatch) {
  return fetch(RecipeAPI)
    .then(res => res.json())
    .then(recipes => {
      return dispatch({
        type: GET_RECIPES,
        payload: recipes
      })
    })
}
