const fetchMiniLeaderboard = () => {
    return (dispatch) => {
        dispatch( {type: 'LOADING_MINI_LEADERBOARD'} )

        fetch('http://localhost:3000/leaderboard-mini')
        .then(response => response.json())
        .then(mini => dispatch( {type: 'ADD_MINI_LEADERBOARD', mini}))
    }
  };

  export default fetchMiniLeaderboard;