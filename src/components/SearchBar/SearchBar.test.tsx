import {render,screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { SearchProvider } from "../../context/SearchContext"
import SearchBar from "./SearchBar"
import { searchPokemon } from "../../api"

jest.mock('../../api', () => ({
  searchPokemon: jest.fn(),
}));

describe("Component|SearchBar", () => {
  it ("should render component searchbar ", () => {
    render(
      <SearchProvider>
        <SearchBar/>
      </SearchProvider>
     )
 
     expect(screen.getByTestId('container-searchbar')).toBeInTheDocument()
     expect(screen.getByPlaceholderText('Procure seu pokémon')).toBeInTheDocument()
     expect(screen.getByAltText('Clique para procurar')).toBeInTheDocument()
  })

  it('should update the search state on input change', async () => {
    render(
      <SearchProvider>
        <SearchBar/>
      </SearchProvider>
    )

    const inputStub = screen.getByPlaceholderText('Procure seu pokémon')

    userEvent.type(inputStub,'Pikachu')

    await waitFor(() => {
      expect(inputStub).toHaveValue('Pikachu')
    })
  })

  it('should call searchPokemon when clicking the search button', async () => {
    render(
      <SearchProvider>
        <SearchBar/>
      </SearchProvider>
    )
    
    const inputStub = screen.getByPlaceholderText('Procure seu pokémon')
    const searchButton = screen.getByAltText('Clique para procurar')

    userEvent.type(inputStub,'Pikachu')
    userEvent.click(searchButton)
    await waitFor(() => {
      expect(searchPokemon).toHaveBeenCalledWith('Pikachu', expect.any(Function));
    });
  })
})