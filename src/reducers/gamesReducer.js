let initialState = {games: [], filteredGames: [], loading: false}

let gamesReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'LOADING_SCHEDULED_GAMES':
      return {...state, games: [...state.games], filteredGames: [...state.games], loading: true}
    
    case 'ADD_SCHEDULED_GAMES':
      return {...state, games: action.games, filteredGames: action.games, loading: false}

    case 'FILTER_GAMES_BY_SPORT':
      return {...state, filteredGames: action.filteredGames}

    default:
      return state
    }
}

export default gamesReducer;
