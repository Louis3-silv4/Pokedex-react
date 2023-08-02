import { Pokemon } from "../types/Pokemon"

const getFilteredPokemon = (allPokemon:Pokemon[],id:number | undefined) =>{
  const filteredPokemon = allPokemon.filter((item)=>item.id === id)
  const hasFilteredPokemon = filteredPokemon.length > 0 
  const pokemonsList = hasFilteredPokemon ? filteredPokemon : allPokemon

 return pokemonsList
}

export default getFilteredPokemon