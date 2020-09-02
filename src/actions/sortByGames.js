export const sortByGames = (payload) => {

    let filteredGames;

      if (payload.sortBy === 'Starting Soon Desc') {
        filteredGames = payload.filteredGames.sort((a, b) => {
          let aDate = new Date(a.time);
          let bDate = new Date(b.time);

          if (bDate > aDate) {
            return -1
          } else if (bDate < aDate) {
            return 1
          } else {
            return 0
          }
        })

      } else if (payload.sortBy === 'Popular Asc'){
          filteredGames = payload.filteredGames.sort((a, b) => {
            let aPicks = a.user_picks_summary.total;
            let bPicks = b.user_picks_summary.total;

            if (bPicks > aPicks) {
              return 1
            } else if (bPicks < aPicks) {
              return -1
            } else {
              return 0
            }
          })
      } else {
          filteredGames = payload.filteredGames;
      }

    return (dispatch) => {
        dispatch( {type: 'SORT_GAMES', filteredGames} )
    }
}