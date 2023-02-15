import { useEffect,useState } from "react";
import {getPokemon} from '../../api'

export default function Pokedex (){
  const [allPokemon,setAllPokemon] = useState([])
  
  useEffect(() => {
    getPokemon(setAllPokemon)
    console.log('aquiii')
 },[]);

 allPokemon.map((pokemon) =>{
  <PokemonCard


  />
 })


 console.log(allPokemon)
}