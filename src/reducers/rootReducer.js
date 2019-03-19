import { GET_RECIPES, GET_USER } from '../types'


const defaultState = {
  recipes: [],
  searchedRecipes: [],
  currentUser: [],
  searchInput: ""
}

export default function reducer(state=defaultState, action){
  // console.log('%c REDUCER', 'color: blue', state, action)

  switch(action.type){
    case GET_RECIPES:
      return {
        ...state, recipes: action.payload
      }
    case GET_USER:
      return {
        ...state, currentUser: action.payload
      }
    default:
      return state
  }

}
