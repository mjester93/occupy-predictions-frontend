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
      return {...state, filteredGames: action.filteredGames}

    case 'SORT_GAMES':
      let newGames;

      if (action.sortBy === 'Starting Soon Desc') {
        newGames = action.filteredGames.sort((a, b) => {
          let aDate = new Date(a.time);
          let bDate = new Date(b.time);

          if (bDate > aDate) {
            return -1
          } else if (bDate < aDate) {
            return 1
          } else {
            return 0
          }
        })

      } else if (action.sortBy === 'Popular Asc'){
        newGames = action.filteredGames.sort((a, b) => {
            let aPicks = a.user_picks_summary.total;
            let bPicks = b.user_picks_summary.total;

            if (bPicks > aPicks) {
              return 1
            } else if (bPicks < aPicks) {
              return -1
            } else {
              return 0
            }
          })
      } else {
        newGames = action.filteredGames;
      }

      return {...state, filteredGames: newGames, forceUpdate: !state.forceUpdate}

    default:
      return state
    }
}

export default gamesReducer;
