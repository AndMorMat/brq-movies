
import { AUTH_TOKEN } from "@env"
import { ApiError } from "./api-error"

const DEFAULT_ERROR_MESSAGE = 'Ops, algum erro aconteceu, estamos trabalhando para resolver'

const BASE_URL = 'https://api.themoviedb.org/3'
const MOVIES_URL = '/discover/movie'
const MOVIES_DATAILS_URL = '/movie'

interface ITMDBServiceReturn {
  fetchMovies: () => object,
  fetchMoviesDetails: (movieId: number) => object
}

export const TMDBService = (): ITMDBServiceReturn => {

  const handleRequest = async (endpoint: string) => {
    const url = `${BASE_URL}${endpoint}`
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new ApiError(errorData.status_message)
      }

      return await response.json()

    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }
      // Handle error, send sentry for exemplo
      throw new Error(DEFAULT_ERROR_MESSAGE)
    }
  }

  const fetchMovies = () => handleRequest(MOVIES_URL)
  const fetchMoviesDetails = (movieId: number) => handleRequest(`${MOVIES_DATAILS_URL}/${movieId}?language=pt-BR`)

  return {
    fetchMovies,
    fetchMoviesDetails,
  }
}