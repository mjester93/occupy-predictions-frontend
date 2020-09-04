const fetchScheduledGames = () => {
    return (dispatch) => {
        dispatch( {type: 'LOADING_SCHEDULED_GAMES'} )

        fetch('http://localhost:3000/games?limit=5')
        .then(response => response.json())
        .then(games => dispatch( {type: 'ADD_SCHEDULED_GAMES', games: games} ))

        fetch('http://localhost:3000/games?limit=999')
        .then(response => response.json())
        .then(games => dispatch( {type: 'ADD_SCHEDULED_GAMES', games: games} ))
    }
  };

  export default fetchScheduledGames;