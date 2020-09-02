export const sortByGames = (payload) => {

    let filteredGames;
    if (payload.sortBy === 'Starting Soon Desc') {
        filteredGames = payload.filteredGames.sort((a, b) => {return b.date - a.date})
    } else if (payload.sortBy === 'Popular Asc'){
        filteredGames = payload.filteredGames.sort((a, b) => {return b.user_picks_summary.total - a.user_picks_summary.total})
    } else {
        filteredGames = payload.filteredGames;
    }

    return (dispatch) => {
        dispatch( {type: 'SORT_GAMES', filteredGames} )
    }
}