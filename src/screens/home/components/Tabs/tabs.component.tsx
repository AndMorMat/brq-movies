import React, { useState } from 'react'
import { LayoutChangeEvent, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './tabs.styles'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveTabAction } from '~store/actions/screens/movies.screen.action'
import { IState } from '~types/state'
import { ITabProps } from './types'

export const Tab = ({ onPress, text, active }: ITabProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.tabComponent}
      onPress={onPress}
      testID={text}
    >
      <Text style={[styles.label, active && styles.active]}>{text}</Text>
    </TouchableOpacity>
  )
}

export const Tabs = (): JSX.Element => {
  const dispatch = useDispatch()
  const [highlightLeft, setHighlightLeft] = useState(0)
  const tab = useSelector((state: IState) => state.moviesScreen.activeTab)

  const onLayoutEvent = (event: LayoutChangeEvent) => {
    const left = event.nativeEvent.layout.width / 2
    setHighlightLeft(left)
  }

  const onTabPress = (tabIndex: number) => {
    dispatch(changeActiveTabAction(tabIndex))
  }

  return (
    <View onLayout={onLayoutEvent}>
      <View style={styles.tabs}>
        <Tab onPress={() => onTabPress(0)} text="Todos os Filmes" active={tab === 0} />
        <Tab onPress={() => onTabPress(1)} text="Filmes Favoritos" active={tab === 1} />
      </View>
      <View style={styles.highlightContainer}>
        <View style={[styles.rowHighlight, { left: highlightLeft * tab }]} />
      </View>
    </View>
  )
}