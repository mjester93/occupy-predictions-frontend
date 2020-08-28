export const filterBySport = (payload) => {

    let filteredGames;
    if (payload.sport === 'All') {
        filteredGames = payload.games
    } else {
        filteredGames = payload.games.filter(game => {return payload.sport === game.league.abbreviation})
    }

    return (dispatch) => {
        dispatch( {type: 'FILTER_GAMES_BY_SPORT', filteredGames})
    }
}
