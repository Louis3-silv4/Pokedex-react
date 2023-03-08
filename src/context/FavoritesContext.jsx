import { createContext,useState} from "react";

export const FavoriteContext = createContext(null);

export const FavoriteProvider = ({children}) =>{
  const [favoritesPokemon, setFavoritesPokemon] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

  const isFavorite = (pokemonId) => {
    const result = favorites.findIndex((item) => item.id === pokemonId)
    return result > -1
  }
  const favoriteCard = (pokemon)=>{
    if(isFavorite(pokemon.id)){
      return alert(`${pokemon.name} já foi favoritado`)
    }
    setFavoritesPokemon([...favorites, pokemon])
    localStorage.setItem('favorites', JSON.stringify(isFavorite))
  }
  const unFavoriteCard = (index) => {
    const newFavorites = [...favorites]
    newFavorites.splice(index, 1)
    setFavoritesPokemon(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }
    
  return (
    <FavoriteContext.Provider value={{favoritesPokemon,favoriteCard,unFavoriteCard}}>
       {children}
    </FavoriteContext.Provider>
  )
}
