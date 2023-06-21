import { Pokemon } from "./types/Pokemon";
import  React  from "react";

export async function getPokemon (limit: number = 30):Promise<Pokemon[]>{
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const pokemons: Pokemon[] = []
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();

    await Promise.all([...data.results.map(async (item:Pokemon) => {
      const result = await getByUrl(item.url);
      pokemons.push(result);
    })]);
  }

  return pokemons;
}

export function searchPokemon  (pokemonTerm:string,setPokemonCallback: React.Dispatch<React.SetStateAction<Pokemon | null>>): void{
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonTerm}`;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
   setPokemonCallback(data)
  })
  .catch((err) => {
    console.log(err.message);
    setPokemonCallback(null)
  });
}

export async function getByUrl (url:string):Promise<Pokemon>{
 return fetch(url)
  .then((res) => res.json())
  .then((data) => {
   return(data);
  })
  .catch((err) => {
    console.log(err.message);
    return err
  });
}