import {PokedexContainer} from './styles';
import { useContext, useEffect,useState } from "react";
import {getPokemon} from '../../api'
import PokemonCard from '../PokemonCard/PokemonCard'
import { SearchContext } from '../../context/SearchContext';
import {MenssagemDeErro} from "../Favoritos/styles"

export default function Pokedex (){
  const [allPokemon,setAllPokemon] = useState([])
  const [hasPokemon,setHasPokemon] = useState(false)
  const {pokemon} = useContext(SearchContext)

  useEffect(() => {
  getPokemon().then((pokemons) => {
    console.log({pokemons})
    if (pokemons.length > 0) {
      setHasPokemon(true)
    }
    setAllPokemon(pokemons)
  })
 },[]);

 const filteredPokemon = allPokemon.filter((item)=>item.id === pokemon.id)
 const hasFilteredPokemon = filteredPokemon.length > 0 
 const pokemonsList = hasFilteredPokemon ? filteredPokemon : allPokemon
  
  console.log({pokemonsList})
  return hasPokemon ? (
    <PokedexContainer>
      {pokemonsList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          )
      })}
    </PokedexContainer>
   ) : <MenssagemDeErro>Lista vazia</MenssagemDeErro>
}