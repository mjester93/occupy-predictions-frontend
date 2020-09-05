let initialState = {picks: [], filteredPicks: [], loading: true}

let myFollowsPicksReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'LOADING_MY_FOLLOWS_PICKS':
      return {...state}

    case 'ADD_MY_FOLLOWS_PICKS':
      return {...state, picks: action.picks, filteredPicks: action.picks, loading: false}

    case 'FILTER_MY_FOLLOW_PICKS':
      return {...state, filteredPicks: action.filteredUserPicks, loading: false}

    default:
      return state
    }
}

export default myFollowsPicksReducer;
