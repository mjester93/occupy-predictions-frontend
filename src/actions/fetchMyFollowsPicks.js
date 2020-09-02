const fetchMyFollowsPicks = () => {
    return (dispatch) => {
        dispatch( {type: 'LOADING_MY_FOLLOWS_PICKS'} )

        const user_token = localStorage.getItem('token')

        fetch('http://localhost:3000/my-follows?user_token=' + user_token)
        .then(response => response.json())
        .then(picks => dispatch( {type: 'ADD_MY_FOLLOWS_PICKS', picks} ))
    }
};

export default fetchMyFollowsPicks;