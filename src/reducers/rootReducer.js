import { combineReducers } from 'redux';

import gamesReducer from './gamesReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({gamesReducer, usersReducer});

export default rootReducer