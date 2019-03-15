const defaultState = {
  test: "test"
}

function reducer(state=defaultState, action){
  console.log(action)

  switch(action.type){
    default:
      return state
  }

}

export default reducer
