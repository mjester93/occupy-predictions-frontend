export const filterUserPicksByStatus = (payload) => {

    let filteredUserPicks;
    if (payload.status === 'All') {
        filteredUserPicks = payload.picks
    } else {
        filteredUserPicks = payload.picks.filter(pick => {return payload.status.toUpperCase() === pick.result.toUpperCase()})
    }

    return (dispatch) => {
        dispatch( {type: 'FILTER_USER_PICKS', filteredUserPicks})
    }
}
