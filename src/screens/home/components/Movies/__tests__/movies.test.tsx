import React from 'react'
import { render } from '@testing-library/react-native'
import { Movies } from '../movies.component'

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));

const movies = [
  {
    poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    id: 976573,
    original_title: "Elemental"
  },
  {
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    id: 724209,
    original_title: "Heart of Stone"
  },
  {
    poster_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    id: 569094,
    original_title: "Spider-Man: Across the Spider-Verse"
  },
]


describe('Movies', () => {
  it('the component rendered', () => {
    render(<Movies movies={movies} />)
  })

  it('the component rendered correct number of elements', () => {
    const { getAllByTestId } = render(<Movies movies={movies} />)
    const elements = getAllByTestId('movie-test-id')
    expect(elements.length).toBe(movies.length)
  })

  it('the loader rendered correct', () => {
    const { getByTestId } = render(<Movies movies={movies} loading={true} />)
    const element = getByTestId('loading-test-id')
    expect(element).toBeTruthy()
  })
})


