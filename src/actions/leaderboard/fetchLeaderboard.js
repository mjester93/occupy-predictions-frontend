const fetchLeaderboard = () => {
    return (dispatch) => {
        dispatch( {type: 'LOADING_LEADERBOARD'} )

        fetch('http://localhost:3000/leaderboard')
        .then(response => response.json())
        .then(mini => dispatch( {type: 'ADD_LEADERBOARD', mini}))
    }
  };

  export default fetchLeaderboard;