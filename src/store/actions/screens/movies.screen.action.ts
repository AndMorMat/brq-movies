import { IMovie } from "~screens/home/components/Movies/types"

const PREFIX = 'movies'
export const FETCH_MOVIES_ACTION = `${PREFIX}.FETCH`
export const FETCH_MOVIES_SUCCESS_ACTION = `${PREFIX}.FETCH_SUCCESS`
export const FETCH_MOVIES_FAIL_ACTION = `${PREFIX}.FETCH_FAIL`
export const CHANGE_ACTIVE_TAB = `${PREFIX}.CHANGE_ACTIVE_TAB`

export const fetchMoviesAction = (activeTab: number) => ({
  type: FETCH_MOVIES_ACTION,
  payload: { activeTab }
})

export const fetchMoviesSuccessAction = (movies: IMovie[]) => ({
  type: FETCH_MOVIES_SUCCESS_ACTION,
  payload: { movies }
})

export const fetchMoviesFailAction = (message: string) => ({
  type: FETCH_MOVIES_FAIL_ACTION,
  payload: { message }
})

export const changeActiveTabAction = (activeTab: number) => ({
  type: CHANGE_ACTIVE_TAB,
  payload: { activeTab }
})

