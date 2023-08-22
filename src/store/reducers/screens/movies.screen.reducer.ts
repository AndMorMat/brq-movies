import {
  CHANGE_ACTIVE_TAB,
  FETCH_MOVIES_ACTION,
  FETCH_MOVIES_FAIL_ACTION,
  FETCH_MOVIES_SUCCESS_ACTION
} from '../../actions/screens/movies.screen.action'

const initialState = {
  loading: false,
  activeTab: 0,
  movies: [],
}

const moviesScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_ACTION:
      return {
        ...state,
        loading: true
      }
    case FETCH_MOVIES_SUCCESS_ACTION: {
      return {
        ...state,
        loading: false,
        movies: action.payload.movies
      }
    }
    case FETCH_MOVIES_FAIL_ACTION:
      return {
        ...state,
        loading: false,
        movies: []
      }
    case CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload.activeTab
      }
    default:
      return state
  }
}

export default moviesScreenReducer