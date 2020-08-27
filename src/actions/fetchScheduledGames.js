const fetchScheduledGames = () => {
    return (dispatch) => {
        dispatch( {type: 'LOADING_SCHEDULED_GAMES'} )

        fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(games => dispatch( {type: 'ADD_SCHEDULED_GAMES', games}))
    }
  };

  export default fetchScheduledGames;