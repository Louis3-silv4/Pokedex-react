import { useContext, useState } from 'react'
import { FavoriteContext } from './context/FavoritesContext'

export default function Favoritos() {
  const { favoritesPokemon, unFavoritePokemon } = useContext(FavoriteContext);


}

