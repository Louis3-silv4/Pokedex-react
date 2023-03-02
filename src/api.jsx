
export async function getPokemon ( limit=30){
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const pokemons = [];
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();

    await Promise.all([...data.results.map(async item => {
      const result = await getByUrl(item.url);
      pokemons.push(result);
    })]);
  }

  return pokemons;
}

export function searchPokemon  (pokemonTerm,setPokemonCallback) {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonTerm}`

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
   setPokemonCallback(data)
  })
  .catch((err) => {
    console.log(err.message);
    setPokemonCallback({})
  });
}
export async function getByUrl (url){
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