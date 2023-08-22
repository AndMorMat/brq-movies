import { takeLatest, put } from 'redux-saga/effects'
import { FETCH_MOVIES_ACTION, fetchMoviesSuccessAction } from '~actions/screens/movies.screen.action'
import { TMDBService } from '~services/tmdb.service'
import { fetchMoviesFailAction } from '~actions/screens/movies.screen.action'

function* handleFetchMoviesAction() {
  try {
    const movies = yield TMDBService().fetchMovies()

    yield put(fetchMoviesSuccessAction(movies.results))
  } catch (e) {
    yield put(fetchMoviesFailAction(e.message))
  }
}

function* fetchMoviesSaga() {
  yield takeLatest(FETCH_MOVIES_ACTION, handleFetchMoviesAction)
}

export default fetchMoviesSaga