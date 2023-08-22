import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./header.styles"
import { back, heart } from "~assets/images"
import { useNavigation } from "@react-navigation/native"
import { IHeaderProps } from "./types"

export const Header = ({ title, fixed }: IHeaderProps) => {
  const navigation = useNavigation()

  const onBackPress = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={[styles.headerContent, fixed && styles.fixed]}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={back} />
      </TouchableOpacity>
      {fixed && (
        <View style={styles.fixedTitleContainer}>
          <Text style={styles.fixedTitle} numberOfLines={1}>{title}</Text>
        </View>
      )}
      <TouchableOpacity>
        <Image source={heart} />
      </TouchableOpacity>
    </View>
  )
}