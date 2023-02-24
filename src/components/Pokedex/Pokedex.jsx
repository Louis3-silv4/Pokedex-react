import {PokedexContainer} from './styles';
import { useEffect,useState } from "react";
import {getPokemon} from '../../api'
import PokemonCard from '../PokemonCard/PokemonCard'

export default function Pokedex (){
  const [allPokemon,setAllPokemon] = useState([])
  const [hasPokemon,setHasPokemon] = useState(false)

  
  useEffect(() => {
  getPokemon().then((pokemons) => {
    console.log({pokemons})
    if (pokemons.length > 0) {
      setHasPokemon(true)
    }
    setAllPokemon(pokemons)
  })
 },[]);
  
  console.log(allPokemon)
  return hasPokemon ? (
    <PokedexContainer>
      {allPokemon.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.sprites.other.home.front_default}/>
          )
      })}
    </PokedexContainer>
   ) : <p>Lista vazia</p>
}