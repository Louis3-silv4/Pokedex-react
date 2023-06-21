import {PokedexContainer} from './styles';
import { useContext, useEffect,useState } from "react";
import {getPokemon} from '../../api'
import {PokemonCard} from '../PokemonCard/PokemonCard'
import { SearchContext, SearchContextType } from '../../context/SearchContext';
import {MenssagemDeErro,Texto} from "../Favoritos/styles"
import React from 'react';
import { Pokemon } from '../../types/Pokemon';

export default function Pokedex (){
  const [allPokemon,setAllPokemon] = useState<Pokemon[]>([])
  const [hasPokemon,setHasPokemon] = useState(false)
  const {pokemon} = useContext(SearchContext) as SearchContextType;

  useEffect(() => {
  getPokemon().then((pokemons) => {
    console.log({pokemons})
    if (pokemons.length > 0) {
      setHasPokemon(true)
    }
    setAllPokemon(pokemons)
  })
 },[]);

 const filteredPokemon = allPokemon.filter((item)=>item.id === pokemon?.id)
 const hasFilteredPokemon = filteredPokemon.length > 0 
 const pokemonsList = hasFilteredPokemon ? filteredPokemon : allPokemon
  
  console.log({pokemonsList})
  return hasPokemon ? (
    <PokedexContainer>
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