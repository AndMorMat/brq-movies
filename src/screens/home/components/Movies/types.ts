export interface IMovie {
  id: number,
  poster_path: string,
  original_title: string,
  overview?: string,
}

export interface IMovieProps {
  movie: IMovie,
  size: number
}

export interface IMoviesProps {
  movies: IMovie[],
  loading?: boolean
}