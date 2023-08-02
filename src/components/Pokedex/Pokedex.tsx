import {PokedexContainer} from './styles';
import {useContext, useEffect,useState } from "react";
import {getPokemon} from '../../api'
import PokemonCard from '../PokemonCard/PokemonCard'
import { SearchContext, SearchContextType } from '../../context/SearchContext';
import {MenssagemDeErro,Texto} from "../Favoritos/styles"
import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import getFilteredPokemon from '../../utils/getFilteredPokemon';

export default function Pokedex (){
  const [allPokemon,setAllPokemon] = useState<Pokemon[]>([])
  const [hasPokemon,setHasPokemon] = useState(false)
  const {pokemon} = useContext(SearchContext) as SearchContextType;

  useEffect(() => {
  getPokemon().then((pokemons) => {
    console.log({pokemons})
    if (pokemons.length > 0) {
      setHasPokemon(true)
      console.log("aquiii")
    }
    setAllPokemon(pokemons)
  })
 },[]);

 const pokemonsList = getFilteredPokemon(allPokemon,pokemon?.id)
  
  console.log({pokemonsList})
  return hasPokemon ? (
    <PokedexContainer data-testId='container-pokedex'>
      {pokemonsList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isFavorite={false}/>
          )
      })}
    </PokedexContainer>
   ) :
    <MenssagemDeErro>
      <Texto>Lista vazia</Texto>
  </MenssagemDeErro>
}