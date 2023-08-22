import { ImageSourcePropType } from "react-native";

export interface IInputProps {
  placeholder?: string,
  icon?: ImageSourcePropType,
  showResetIcon?: boolean,
  secureTextEntry?: boolean,
  onAction: () => void,
  value: string,
}