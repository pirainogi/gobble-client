import { GET_RECIPES, GET_USER } from '../types'

const RecipeAPI = 'http://localhost:3000/api/v1/recipes'
const UserAPI = 'http://localhost:3000/api/v1/users'
// const RecipeSearch = ''

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

export function fetchUser(dispatch) {
  return fetch(UserAPI)
    .then(res => res.json())
    .then(user => {
      return dispatch({
        type: GET_USER,
        payload: user
      })
    })
}
