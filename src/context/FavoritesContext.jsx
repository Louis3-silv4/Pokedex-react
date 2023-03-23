import { createContext,useState} from "react";

export const FavoriteContext = createContext(null);

export const FavoriteProvider = ({children}) =>{
  const [favoritesPokemon, setFavoritesPokemon] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

  const isFavorite = (pokemonId) => {
    const result = favoritesPokemon.findIndex((item) => item.id === pokemonId)
    return result > -1
  }
//Mudar nome do favorite 
  const favoritePokemonCard = (pokemon)=>{
    if(isFavorite(pokemon.id)){
      return alert(`${pokemon.name} já foi favoritado`)
    }

    setFavoritesPokemon((prevState)=>{
      const newFavoritesPokemon = [...prevState, pokemon] 
      localStorage.setItem('favorites', JSON.stringify(newFavoritesPokemon))
      return newFavoritesPokemon
    })
  }

  const unFavoritePokemon = (index) => {
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
