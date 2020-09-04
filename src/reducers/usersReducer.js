let initialState = {user: {}, loggedIn: false, loading: true}

let usersReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'LOG_USER_IN':
      localStorage.setItem('token', action.token);
      return {...state, loggedIn: true}
    
    case 'LOG_USER_OUT':
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {...state, loggedIn: false}

    case 'LOADING_USER_INFORMATION':
      return {...state, user: {...state.user, filteredUserPicks: []}, loading: true}
    
    case 'ADD_USER_INFORMATION':
      return {...state, user: {...action.user, filteredUserPicks: action.user['user_picks']}, loading: false}

    case 'UPDATE_USER_INFORMATION':
      return {...state, user: {...state.user, ...action.userData.user}, loading: false}

    case 'FILTER_USER_PICKS':
      return {...state, 
        user: {
          ...state.user,
          filteredUserPicks: action.filteredUserPicks
        }
      }

    case 'UPDATE_FOLLOWEES':
      return {
        ...state, 
        user: {
          ...state.user, 
          followees_ids: action.followData.ids, 
          followees_count: action.followData.count
        }
      }

    default:
      return state
    }
}

export default usersReducer;
