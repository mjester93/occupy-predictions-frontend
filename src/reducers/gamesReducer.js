function gamesReducer(state = { astronauts: [] }, action) {
    switch (action.type) {
   
      case 'ADD_SCHEDULED_GAMES':
        return { ...state, games: action.games }
   
      default:
        return state;
    }
  };