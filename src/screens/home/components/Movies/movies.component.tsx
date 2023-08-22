import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, FlatList, LayoutChangeEvent, TouchableOpacity, View } from 'react-native'
import { IMovieProps, IMoviesProps } from './types'
import { PosterImage } from '~common/PosterImage/poster-image.component'
import { styles } from './movies.styles'

const MOVIE_DETAILS_SCREEN_NAME = 'Movie Details'

const Movie = ({ movie, size }: IMovieProps): JSX.Element => {
  const navigation = useNavigation()
  const { poster_path: posterPath, id } = movie

  const onPress = () => {
    navigation.navigate(MOVIE_DETAILS_SCREEN_NAME, { movieId: id })
  }

  return (
    <TouchableOpacity onPress={onPress} testID='movie-test-id'>
      <PosterImage
        posterPath={posterPath}
        size={size}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}

export const Movies = ({ movies, loading }: IMoviesProps): JSX.Element => {
  const [imageSize, setImageSize] = useState(0)

  const onLayoutEvent = (event: LayoutChangeEvent) => {
    const imageSizeMinusMargin = Math.round(event.nativeEvent.layout.width / 2) - 30
    setImageSize(imageSizeMinusMargin)
  }

  if (loading) {
    return (
      <ActivityIndicator
        testID='loading-test-id'
        size="large"
        color={styles.loader.color}
        style={styles.loader}
      />
    )
  }

  return (
    <View onLayout={onLayoutEvent} >
      <FlatList
        style={styles.listContainer}
        numColumns={2}
        data={movies}
        renderItem={({ item }) => <Movie movie={item} size={imageSize} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}