import { createContext,useState} from "react";
import React from "react";
import { Pokemon } from "../types/Pokemon";

export type FavoriteContextType = {
  favoritesPokemon: Pokemon[]
  favoritePokemonCard: (pokemon: Pokemon) => void
  unFavoritePokemon: (index: any) => void
}

export const FavoriteContext = createContext<FavoriteContextType | null>(null);

export const FavoriteProvider = ({children}:any) =>{
  const favoritesFromStorage = localStorage.getItem('favorites')
  const parsedFavorites = favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [];
  const [favoritesPokemon, setFavoritesPokemon] = useState<Pokemon[]>(parsedFavorites)

  const isFavorite = (pokemonId:number): boolean => {
    const result = favoritesPokemon.findIndex((item: { id: number; }) => item.id === pokemonId)
    return result > -1
  }
  
  const favoritePokemonCard = (pokemon:Pokemon)=>{
    if(isFavorite(pokemon.id)){
      return alert(`${pokemon.name} já foi favoritado`)
    }

    setFavoritesPokemon((prevState: any)=>{
      const newFavoritesPokemon = [...prevState, pokemon] 
      localStorage.setItem('favorites', JSON.stringify(newFavoritesPokemon))
      return newFavoritesPokemon
    })
  }

  const unFavoritePokemon = (index: any) => {
    const newFavorites = [...favoritesPokemon]
    newFavorites.splice(index, 1)
    setFavoritesPokemon(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }
    
  return (
    <FavoriteContext.Provider value={{favoritesPokemon,favoritePokemonCard,unFavoritePokemon}}>
       {children}
    </FavoriteContext.Provider>
  )
}
