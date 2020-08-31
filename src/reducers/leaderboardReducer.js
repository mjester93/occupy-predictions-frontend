let initialState = {mini: [], full: [], loading: true};

let leaderboardReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOADING_MINI_LEADERBOARD':
          return {...state, loading: true}
        
        case 'ADD_MINI_LEADERBOARD':
          return {...state, mini: action.mini, loading: false}
    
        default:
          return state
    }
}
    
export default leaderboardReducer;