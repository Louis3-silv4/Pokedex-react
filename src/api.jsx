
export function getPokemon (setPokemonCallback, limit=30){
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  .then((res) => res.json())
  .then((data) => {
    setPokemonCallback(data.results);
  })
  .catch((err) => {
    console.log(err.message);
  });
}

export function searchPokemon (setPokemonCallback, limit=30){
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  .then((res) => res.json())
  .then((data) => {
    setPokemonCallback(data.results);
  })
  .catch((err) => {
    console.log(err.message);
  });
}