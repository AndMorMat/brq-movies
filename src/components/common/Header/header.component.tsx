import { Image, LayoutChangeEvent, Text, TouchableOpacity, View } from "react-native"
import { activeTrailingIcon, trailingIcon } from "~assets/images"
import { useState } from "react"
import { LogoutButton } from "../LogoutButton/logout-button.component"
import { styles } from "./header.styles"

export const Header = (): JSX.Element => {
  const [logoutButtonTopHeight, setLogoutButtonTopHeight] = useState(0)
  const [isLogoutVisible, setIsLogoutVisible] = useState(false)

  const onLayout = (event: LayoutChangeEvent) => {
    setLogoutButtonTopHeight(event.nativeEvent.layout.y + event.nativeEvent.layout.height)
  }

  const onPress = () => {
    setIsLogoutVisible(!isLogoutVisible)
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>BRQ Movies</Text>
      <TouchableOpacity style={styles.image} onLayout={onLayout} onPress={onPress}>
        <Image source={isLogoutVisible ? activeTrailingIcon : trailingIcon} />
      </TouchableOpacity>
      <LogoutButton
        isVisible={isLogoutVisible}
        logoutButtonTopHeight={logoutButtonTopHeight}
      />
    </View>
  )
}