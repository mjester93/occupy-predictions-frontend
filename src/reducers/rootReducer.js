import { combineReducers } from 'redux';

import gamesReducer from './gamesReducer';
import usersReducer from './usersReducer';
import leaderboardReducer from './leaderboardReducer';
import myFollowsPicksReducer from './myFollowsPicksReducer';

const rootReducer = combineReducers({
    gamesReducer, usersReducer, leaderboardReducer, myFollowsPicksReducer
});

export default rootReducer