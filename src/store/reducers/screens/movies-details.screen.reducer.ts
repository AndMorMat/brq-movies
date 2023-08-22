import {
  FETCH_MOVIES_DETAILS_ACTION,
  FETCH_MOVIES_DETAILS_SUCCESS_ACTION
} from "~actions/screens/movies-details.screen.action"

const initialState = {
  loading: false,
  movie: []
}

const moviesDetailsScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_DETAILS_ACTION:
      return {
        ...state,
        loading: true
      }
    case FETCH_MOVIES_DETAILS_SUCCESS_ACTION: {
      return {
        ...state,
        loading: false,
        movie: action.payload.movie
      }
    }
    default:
      return state
  }
}

export default moviesDetailsScreenReducer