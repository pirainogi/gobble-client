import { GET_RECIPES } from '../types'


const defaultState = {
  recipes: [],
  currentrecipes: []
}

export default function reducer(state=defaultState, action){
  console.log('%c REDUCER', 'color: blue', state, action)

  switch(action.type){
    case GET_RECIPES:
      return {
        ...state, recipes: action.payload
      }
    default:
      return state
  }

}
