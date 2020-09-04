const fetchUserInformation = (userId) => {


    return (dispatch) => {
        dispatch( {type: 'LOADING_USER_INFORMATION'} );

        fetch('http://localhost:3000/users/' + userId)
        .then(response => {
            return response.json()
        })
        .then(user => {
            let new_user_picks = [];

            if (user.user_picks) {
                new_user_picks = user.user_picks.sort((a, b) => {
                    let aDate = new Date(a.event_date);
                    let bDate = new Date(b.event_date);
                    
                    if (bDate > aDate) {
                        return 1;
                    } else if (bDate < aDate) {
                        return -1;
                    } else {
                        return 0
                    }
                })
            }

            dispatch( {
                type: 'ADD_USER_INFORMATION', 
                user: {
                    ...user, 
                    user_picks: new_user_picks, 
                    filteredUserPicks: new_user_picks
                }
            } )
        })
    } 
};

export default fetchUserInformation;