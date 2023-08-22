import { Image, Text, TouchableOpacity } from "react-native"
import { logout } from "~assets/images"
import { useDispatch } from "react-redux"
import { logOutUserAction } from "~store/actions/user.actions"
import { styles } from "./logout-button.styles"
import { ILogoutButtonProps } from "./types"

export const LogoutButton = ({ isVisible, logoutButtonTopHeight }: ILogoutButtonProps) => {
  const dispatch = useDispatch()

  if (!isVisible) return null

  const onPress = () => {
    dispatch(logOutUserAction())
  }

  return (
    <TouchableOpacity
      style={[styles.container, { top: logoutButtonTopHeight }]}
      onPress={onPress}
    >
      <Image source={logout} />
      <Text style={styles.text}>Sair</Text>
    </TouchableOpacity>
  )
}