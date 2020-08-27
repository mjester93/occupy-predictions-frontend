let initialState = {user: {}, loading: false}

let usersReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'LOADING_USER_INFORMATION':
      return {
        ...state,
        user: {...state.user},
        loading: true
      }
    
    case 'ADD_USER_INFORMATION':
      return {
        ...state,
        user: action.user,
        loading: false
      }

    default:
      return state
    }
}

export default usersReducer;
