import { all } from 'redux-saga/effects';
import loginScreenSaga from './screens/login.screen.saga';
import fetchMoviesSaga from './screens/movies.screen.saga';
import fetchMoviesDetailsSaga from './screens/movies-details.screen.saga';

function* rootSaga() {
  yield all([
    loginScreenSaga(),
    fetchMoviesSaga(),
    fetchMoviesDetailsSaga()
  ]);
}

export {
  rootSaga
}