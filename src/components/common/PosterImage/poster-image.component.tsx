import { Image } from "react-native"
import { IPosterImageProps } from "./types"

const defaultUri: string = 'https://image.tmdb.org/t/p/w500'
export const heightProportionFactor: number = 1.5

export const PosterImage = ({ posterPath, size, style }: IPosterImageProps) => {
  const uri = `${defaultUri}${posterPath}`
  const imageSize = {
    width: size,
    height: size * heightProportionFactor
  }

  return (
    <Image
      source={{ uri }}
      style={[imageSize, style]}
    />
  )
}