export interface IButtonProps {
  text: string,
  disabled: boolean,
  onPress: () => void,
  loading?: boolean
}