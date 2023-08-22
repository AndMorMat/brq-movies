import { Image, TextInput, TouchableOpacity, View } from "react-native"
import { IInputProps } from "./types"
import { styles } from "./input.styles"
import { close } from "~assets/images"


export const Input = ({
  placeholder,
  icon,
  showResetIcon,
  secureTextEntry,
  value,
  onAction,
}: IInputProps): JSX.Element => {
  return (
    <View style={styles.inputContent}>
      {icon && <Image source={icon} style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={styles.input.color}
        secureTextEntry={secureTextEntry}
        onChangeText={onAction}
        value={value}
      />
      {showResetIcon && (
        <TouchableOpacity onPress={() => onAction('')}>
          <Image source={close} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  )
}