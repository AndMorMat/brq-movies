import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchMoviesDetailsAction } from '~actions/screens/movies-details.screen.action'
import { PosterImage } from '~common/PosterImage/poster-image.component'
import { heightProportionFactor } from '~common/PosterImage/poster-image.component'
import { Header } from './components/Header/header.component'
import { IMovieDetailsProps } from './types'
import { IState } from '~types/state'
import { styles } from './movie-details.styles'

const HEADER_SIZE = 70

export const MovieDetailsScreen = ({ route: { params } }: IMovieDetailsProps): JSX.Element => {
  const dispatch = useDispatch()
  const [posterSize, setPosterSize] = useState(0)
  const [fixed, setFixed] = useState(false)
  const { movieId } = params
  const loading = useSelector((state: IState) => state.movieDetailsScreen.loading)
  const movie = useSelector((state: IState) => state.movieDetailsScreen.movie, shallowEqual)

  useEffect(() => {
    dispatch(fetchMoviesDetailsAction(movieId))
  }, [])

  const {
    original_title: originalTitle,
    poster_path: posterPath,
    overview
  } = movie

  const onLayoutEvent = (event: LayoutChangeEvent) => {
    const posterSize = event.nativeEvent.layout.width
    setPosterSize(posterSize)
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const imagePosterHeight = (posterSize * heightProportionFactor) - HEADER_SIZE
    if (event.nativeEvent.contentOffset.y > imagePosterHeight) {
      setFixed(true)
      return
    }
    setFixed(false)
  }

  if (loading) return <ActivityIndicator />

  return (
    <SafeAreaView style={styles.container}>
      <View onLayout={onLayoutEvent}>
        <Header title={originalTitle} fixed={fixed} />
        <ScrollView onScroll={onScroll} >
          <PosterImage size={posterSize} posterPath={posterPath} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{originalTitle}</Text>
            <Text style={styles.synopsis}>SINOPSE</Text>
            <Text style={styles.overview}>{overview}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}