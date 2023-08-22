import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routes, restrictRoutes, IRoutes } from './routes'
import { useSelector } from 'react-redux'
import { IState } from '../types/state'

const Stack = createNativeStackNavigator();

const renderRoutes = (routes: IRoutes[]) => {
  return routes.map(({ name, component, title }: IRoutes) => (
    <Stack.Screen
      key={name}
      name={name}
      component={component}
      options={{ title, headerShown: false }}
    />
  ))
}

export const StackNavigator = (): JSX.Element => {
  const authenticatedUser = useSelector((state: IState) => state.user.authenticated)
  const availableRoutes = authenticatedUser ? restrictRoutes : routes

  return (
    <Stack.Navigator>
      {renderRoutes(availableRoutes)}
    </Stack.Navigator>
  )
}