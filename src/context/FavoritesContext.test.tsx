import React from "react";
import { FavoriteContext } from "./FavoritesContext";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Favoritos from "../components/Favoritos/Favoritos";
import { mockPokemon } from "../utils/mocks/PokemonMock";
import Pokedex from "../components/Pokedex/Pokedex";
import { SearchProvider } from "./SearchContext";

jest.mock('../api', () => {
  const mockPokemon={
    name: "Pikachu",
    id: 25,
    sprites: {
      other: {
        home: {
          front_default: "pikachu.png"
        }
      }
    },
    url: "",
    weight: 0,
    height: 0,
    stats: [
      {base_stat:60,name:"HP"},
      {base_stat:60,name:"Attack"},
      {base_stat:60,name:"Deefense"},
    ],
    types: [{
      type:{
        name:"electric"
      }
    }],
    isFavorite: false
  }
  return {
    getPokemon: jest.fn().mockResolvedValue([mockPokemon]),
  }
})

describe("Favorite Context",()=>{
  const mockFavoritePokemonCard = jest.fn()
  const mockUnFavoritePokemon = jest.fn()
  
  const mockFavoriteContextValue = {
    favoritesPokemon:[mockPokemon],
    favoritePokemonCard: mockFavoritePokemonCard,
    unFavoritePokemon: mockUnFavoritePokemon,
  }

  beforeEach(() => {
    cleanup()
  })

  describe('when it render',() => {
    it('should return list of favorites pokemon correctly ',() => {
      const favoriteLength = mockFavoriteContextValue.favoritesPokemon.length

      render(
        <FavoriteContext.Provider value={mockFavoriteContextValue}>
          <Favoritos/>
        </FavoriteContext.Provider>
      )
      expect(screen.queryAllByTestId('container-pokemonCard')).toHaveLength(favoriteLength)
    })
  })

  describe('when favoritePokemonCard is called ',() => {
    it('should return list of favorites pokemon correctly ',async () => {
      render(
        <FavoriteContext.Provider value={mockFavoriteContextValue}>
          <SearchProvider value={{pokemon:mockPokemon,setPokemon:jest.fn()}}>
            <Pokedex/>
         </SearchProvider>
        </FavoriteContext.Provider>
      )

      const buttonFavorite = await screen.findByText('Favorite')
      
      userEvent.click(buttonFavorite)
      
      await waitFor(() => {
        expect(mockFavoritePokemonCard).toHaveBeenCalled()
      })
    })
  })

  describe('when unFavoritePokemon is called ',() => {
    it('should return list of favorites pokemon correctly ',async () => {
      render(
        <FavoriteContext.Provider value={mockFavoriteContextValue}>
          <Favoritos/>
        </FavoriteContext.Provider>
      )

      const buttonFavorite = screen.getByText('Unfavorite')

      userEvent.click(buttonFavorite)
      
      await waitFor(() => {
        expect(mockUnFavoritePokemon).toHaveBeenCalled()
      })
    })
  })
})