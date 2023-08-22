import { IMovie } from "../screens/home/components/Movies/types"

export interface IState {
  loginScreen: {
    loading: boolean
  }
  user: {
    authenticated: boolean,
    data: {
      id: number,
      username: string,
    }
  },
  moviesScreen: {
    activeTab: number,
    loading: boolean,
    movies: IMovie[],
  },
  movieDetailsScreen: {
    loading: boolean,
    movie: IMovie,
  }
}