import { IMovie } from "~screens/home/components/Movies/types"

const PREFIX = 'movies-details'
export const FETCH_MOVIES_DETAILS_ACTION = `${PREFIX}.FETCH`
export const FETCH_MOVIES_DETAILS_SUCCESS_ACTION = `${PREFIX}.FETCH_SUCCESS`
export const FETCH_MOVIES_DETAILS_FAIL_ACTION = `${PREFIX}.FETCH_FAIL`


export const fetchMoviesDetailsAction = (movieId: number) => ({
  type: FETCH_MOVIES_DETAILS_ACTION,
  payload: { movieId }
})

export const fetchMoviesDetailsSuccessAction = (movie: IMovie) => ({
  type: FETCH_MOVIES_DETAILS_SUCCESS_ACTION,
  payload: { movie }
})