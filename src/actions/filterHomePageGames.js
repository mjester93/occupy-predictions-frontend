export const filterHomePageGames = (payload) => {

    let filteredGames = payload.games;

    // filtering by sport
    if (payload.sport !== 'All') {
        filteredGames = filteredGames.filter(game => { return payload.sport === game.league.abbreviation })
    }

    // sorting by selection
    if (payload.sortBy === 'Starting Soon Desc') {
        filteredGames = filteredGames.sort((a, b) => {
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
    
    } else if (payload.sortBy === 'Popular Asc'){
        filteredGames = filteredGames.sort((a, b) => {
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
    }

    return (dispatch) => {
        dispatch( {type: 'FILTER_GAMES_BY_SPORT', filteredGames})
    }
}
