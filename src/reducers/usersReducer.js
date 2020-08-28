let initialState = {user: {}, loggedIn: false, loading: false}

let usersReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'LOG_USER_IN':
      return {...state, loggedIn: true}
    
    case 'LOG_USER_OUT':
      localStorage.removeItem('token');
      return {...state, loggedIn: false}

    case 'LOADING_USER_INFORMATION':
      return {...state, user: {...state.user}, loading: true}
    
    case 'ADD_USER_INFORMATION':
      return {...state, user: action.user, loading: false}

    default:
      return state
    }
}

export default usersReducer;
