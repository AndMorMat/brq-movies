import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import loginScreenReducer from './screens/login.screen.reducer';
import moviesScreenReducer from './screens/movies.screen.reducer';
import moviesDetailsScreenReducer from './screens/movies-details.screen.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  loginScreen: loginScreenReducer,
  moviesScreen: moviesScreenReducer,
  movieDetailsScreen: moviesDetailsScreenReducer,
})
