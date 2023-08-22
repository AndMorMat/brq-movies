import { takeLatest, put } from 'redux-saga/effects'
import { TMDBService } from '~services/tmdb.service'
import { FETCH_MOVIES_DETAILS_ACTION, fetchMoviesDetailsSuccessAction } from '~actions/screens/movies-details.screen.action'

function* handleMoviesDetailsAction(action) {
  const { movieId } = action.payload
  const movieDetails = yield TMDBService().fetchMoviesDetails(movieId)

  yield put(fetchMoviesDetailsSuccessAction(movieDetails))
}

function* fetchMoviesDetailsSaga() {
  yield takeLatest(FETCH_MOVIES_DETAILS_ACTION, handleMoviesDetailsAction)
}

export default fetchMoviesDetailsSaga
