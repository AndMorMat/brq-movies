import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Tab, Tabs } from '../tabs.component'

const mockedNavigate = jest.fn()

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }))

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}))

describe('Movies', () => {
  it('the component rendered', () => {
    render(<Tabs />)
  })

  it('the tab component rendered', () => {
    render(<Tab onPress={() => null} text={'test tab'} tab={0} />)
  })

  it('the tabs rendered correctly', () => {
    const { getByText } = render(<Tabs />)
    const allMoviesTab = getByText('Todos os Filmes')
    const favMoviesTab = getByText('Filmes Favoritos')
    expect(allMoviesTab).toBeTruthy()
    expect(favMoviesTab).toBeTruthy()
  })


  it('the onPress called when the button is pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<Tab onPress={onPressMock} text={'test tab click'} tab={0} />)
    const allMoviesTab = getByText('test tab click')
    fireEvent.press(allMoviesTab)
    expect(onPressMock).toHaveBeenCalled()

  })
})


