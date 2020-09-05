export const filterMyFollowsPicks = (payload) => {

    let filteredUserPicks = payload.picks;

    // filtering by sport
    if (payload.sport !== 'All') {
        filteredUserPicks = filteredUserPicks.filter(pick => {return payload.sport === pick.league});
    }
    
    // filtering by status
    if (payload.status !== 'All') {
        filteredUserPicks = filteredUserPicks.filter(pick => {return payload.status.toUpperCase() === pick.result.toUpperCase()})
    }

    // filtering by time
    let d = new Date();
    if (payload.date === 'This Week') {
        let sunday = new Date(d.setDate(d.getDate() - (d.getDay() + 7) % 7))
        filteredUserPicks = filteredUserPicks.filter(pick => {return new Date(pick.event_date) >= sunday})
    } else if (payload.date === 'This Month') {
        let firstDayOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        filteredUserPicks = filteredUserPicks.filter(pick => {return new Date(pick.event_date) >= firstDayOfMonth})
    }

    return (dispatch) => {
        dispatch( {type: 'FILTER_MY_FOLLOW_PICKS', filteredUserPicks})
    }
}
