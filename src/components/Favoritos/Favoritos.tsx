import { useContext,useState} from 'react';
import { PokedexContainer } from "../Pokedex/styles";
import { FavoriteContext, FavoriteContextType } from "../../context/FavoritesContext";
import {PokemonCard} from '../PokemonCard/PokemonCard'
import {MenssagemDeErro,Texto} from "../Favoritos/styles"
import React from 'react';
import { Pokemon } from '../../types/Pokemon';

export default function Favoritos() {
  const {favoritesPokemon} = useContext(FavoriteContext) as FavoriteContextType
  const [hasPokemon] = useState(favoritesPokemon.length > 0);

 return hasPokemon ? (
    <PokedexContainer data-testId='container-favoritos'>
      {favoritesPokemon.map((pokemon: Pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isFavorite={true}/>
        )
      })}
    </PokedexContainer>
 ) : <MenssagemDeErro>
       <Texto>Não existe pokemon favoritado</Texto> 
  </MenssagemDeErro>

}

