import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 30,
    zIndex: 100,
    backgroundColor: '#2E2F33',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
})