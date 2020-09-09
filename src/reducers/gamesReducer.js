let initialState = {games: [], filteredGames: [], gamesStartingSoon: [], loading: false, forceUpdate: false}

let gamesReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'LOADING_SCHEDULED_GAMES':
      return {
        ...state, 
        games: [...state.games], 
        filteredGames: [...state.games], 
        gamesStartingSoon: [...state.games], 
        loading: true
      }
    
    case 'ADD_SCHEDULED_GAMES':
      let gamesStartingSoon = action.games.filter(game => game['is_starting_soon'] === true)
      gamesStartingSoon = gamesStartingSoon.sort((a, b) => b.datetime - a.datetime)
      return {...state, games: action.games, filteredGames: action.games, gamesStartingSoon, loading: false}

    case 'FILTER_GAMES_BY_SPORT':
      return {...state, filteredGames: action.filteredGames, forceUpdate: !state.forceUpdate}

    default:
      return state
    }
}

export default gamesReducer;
