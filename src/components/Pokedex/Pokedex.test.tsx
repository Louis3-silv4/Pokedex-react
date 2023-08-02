import Pokedex from "../../components/Pokedex/Pokedex";
import { render,screen, waitFor } from "@testing-library/react";
import React from "react";
import { SearchProvider } from "../../context/SearchContext";
import { FavoriteProvider } from "../../context/FavoritesContext";
import { mockPokemon } from "../../utils/mocks/PokemonMock";

jest.mock('../../api', () => {
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
    getPokemon: jest.fn().mockResolvedValueOnce([mockPokemon]).mockResolvedValue([]),
  }
});
describe("Component|Pokedex", () => {

describe("when hasPokemon is true", () => {
  it ("should render PokedexContainer", async () => {
   render(
    <FavoriteProvider value={{favoritesPokemon:[],favoritePokemonCard:jest.fn(),unFavoritePokemon:jest.fn()}}>
      <SearchProvider value={{pokemon:mockPokemon,setPokemon:jest.fn()}}>
        <Pokedex/>
      </SearchProvider>
    </FavoriteProvider>
    )
    await waitFor(()=>{
      const containerElement = screen.getByTestId('container-pokedex');
  
      expect(containerElement).toBeInTheDocument();
    })

  })
})
describe("when hasPokemon is false",() => {

  it ("should render MenssagemDeErro ", async () => {
    render(
     <FavoriteProvider value={{favoritesPokemon:[],favoritePokemonCard:jest.fn(),unFavoritePokemon:jest.fn()}}>
        <SearchProvider value={{pokemon:mockPokemon,setPokemon:jest.fn()}}>
          <Pokedex/>
        </SearchProvider>
     </FavoriteProvider>
    )
    await waitFor(()=>{
      expect(screen.getByText('Lista vazia')).toBeInTheDocument();
    })

  })
 })
})