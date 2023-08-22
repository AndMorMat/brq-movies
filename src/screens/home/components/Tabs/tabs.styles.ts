import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    marginTop: 30,
    paddingBottom: 10
  },
  tabComponent: {
    justifyContent: 'center',
    flex: 1
  },
  label: {
    color: '#A9A9A9',
    fontSize: 16,
    textAlign: 'center'
  },
  active: {
    color: '#EC8B00',
  },
  highlightContainer: {
  },
  rowHighlight: {
    height: 3,
    width: "50%",
    backgroundColor: '#EC8B00',
  }
})