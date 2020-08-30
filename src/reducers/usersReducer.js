let initialState = {user: {}, loggedIn: false, loading: true}

let usersReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'LOG_USER_IN':
      return {...state, loggedIn: true}
    
    case 'LOG_USER_OUT':
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {...state, loggedIn: false}

    case 'LOADING_USER_INFORMATION':
      return {...state, user: {...state.user, filteredUserPicks: []}, loading: true}
    
    case 'ADD_USER_INFORMATION':
      return {...state, user: {...action.user, filteredUserPicks: action.user['user_picks']}, loading: false}

    case 'FILTER_USER_PICKS':
      return state

    default:
      return state
    }
}

export default usersReducer;
