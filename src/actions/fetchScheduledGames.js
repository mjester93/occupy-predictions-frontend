export function fetchScheduledGames() {
    const games = fetch('http://localhost:3000/games');
    
    return {
      type: 'ADD_SCHEDULED_GAMES',
      games
    };
  };