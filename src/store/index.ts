// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import { authReducer, gameReducer, onboardReducer } from './reducers';

// Redux: Root Reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  onboard: onboardReducer,
  game: gameReducer,
});
