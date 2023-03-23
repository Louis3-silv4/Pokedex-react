import { useContext,useState} from 'react';
import { PokedexContainer } from "../Pokedex/styles";
import { FavoriteContext } from "../../context/FavoritesContext";
import PokemonCard from '../PokemonCard/PokemonCard'
import {MenssagemDeErro} from "../Favoritos/styles"

export default function Favoritos() {
  const {favoritesPokemon} = useContext(FavoriteContext)
  const [hasPokemon, setHasPokemon] = useState(favoritesPokemon.length > 0);

return hasPokemon ? (
  <PokedexContainer>
    {favoritesPokemon.map((pokemon) => {
      return (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      )
    })}
  </PokedexContainer>
) : <MenssagemDeErro>Não existe pokemon favoritado</MenssagemDeErro>

}

