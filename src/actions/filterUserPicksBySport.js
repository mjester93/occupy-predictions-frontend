export const filterUserPicksBySport = (payload) => {

    let filteredUserPicks;
    if (payload.sport === 'All') {
        filteredUserPicks = payload.picks
    } else {
        filteredUserPicks = payload.picks.filter(pick => {return payload.sport === pick.league})
    }

    return (dispatch) => {
        dispatch( {type: 'FILTER_USER_PICKS', filteredUserPicks})
    }
}
