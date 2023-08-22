import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Header } from '~common/Header/header.component'
import { styles } from './home.styles'
import { Tabs } from './components/Tabs/tabs.component'
import { Movies } from './components/Movies/movies.component'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchMoviesAction } from '~store/actions/screens/movies.screen.action'
import { IState } from '~types/state'

export const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const activeTab = useSelector((state: IState) => state.moviesScreen.activeTab)
  const loading = useSelector((state: IState) => state.moviesScreen.loading)
  const results = useSelector((state: IState) => state.moviesScreen.movies, shallowEqual)

  useEffect(() => {
    dispatch(fetchMoviesAction(activeTab))
  }, [activeTab])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <Tabs />
        <Text onPress={() => navigation.navigate('Login')}>Go to login screen</Text>
        <Movies movies={results} loading={loading} />
      </View>
    </SafeAreaView>
  )
}