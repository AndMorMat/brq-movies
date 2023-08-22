import {
  HomeScreen,
  LoginScreen,
  MovieDetailsScreen,
} from "../screens";

export interface IRoutes {
  name: string,
  title?: string,
  component: () => JSX.Element
}

export const routes: IRoutes[] = [
  {
    name: 'Login',
    component: LoginScreen
  },
]

export const restrictRoutes: IRoutes[] = [
  {
    name: 'Home',
    title: 'BRQ Movies',
    component: HomeScreen
  },
  {
    name: 'Movie Details',
    component: MovieDetailsScreen
  }
]