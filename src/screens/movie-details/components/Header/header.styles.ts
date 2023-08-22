import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  headerContent: {
    height: 80,
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  fixed: {
    backgroundColor: '#2E2F33'
  },
  fixedTitleContainer: {
    width: '80%'
  },
  fixedTitle: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
})