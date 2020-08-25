let initialState = {games: [], loading: false}

let gamesReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'LOADING_SCHEDULED_GAMES':
      return {
        ...state,
        games: [...state.games],
        loading: true
      }
    
    case 'ADD_SCHEDULED_GAMES':
      return {
        ...state,
        games: action.games,
        loading: false
      }

    default:
      return state
    }
}

export default gamesReducer;
