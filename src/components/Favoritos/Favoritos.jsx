import { useContext,useState} from 'react';
import { PokedexContainer } from "../Pokedex/styles";
import { FavoriteContext } from "../../context/FavoritesContext";
import PokemonCard from '../PokemonCard/PokemonCard'
import {MenssagemDeErro,Texto} from "../Favoritos/styles"

export default function Favoritos() {
  const {favoritesPokemon} = useContext(FavoriteContext)
  const [hasPokemon, setHasPokemon] = useState(favoritesPokemon.length > 0);

return hasPokemon ? (
  <PokedexContainer>
    {favoritesPokemon.map((pokemon) => {
      return (
        <PokemonCard key={pokemon.id} pokemon={pokemon} isFavorite={true}/>
      )
    })}
  </PokedexContainer>
) : <MenssagemDeErro>
   <Texto>Não existe pokemon favoritado</Texto> 
</MenssagemDeErro>

}

