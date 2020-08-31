import { combineReducers } from 'redux';

import gamesReducer from './gamesReducer';
import usersReducer from './usersReducer';
import leaderboardReducer from './leaderboardReducer';

const rootReducer = combineReducers({gamesReducer, usersReducer, leaderboardReducer});

export default rootReducer