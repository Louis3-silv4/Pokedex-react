
export async function getPokemon ( limit=30){
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  const pokemons = []
  const response = await fetch(url)
  console.log({response})
  if (response.status === 200) {
    const data = await response.json()

    data.results.forEach( async (item) => {
      const result = await getByUrl(item.url)
      pokemons.push(result)
    });
  }

  return pokemons
}

export function searchPokemon (setPokemonCallback){
  let url = `https://pokeapi.co/api/v2/pokemon/${setPokemonCallback}`

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
   return(data.results);
  })
  .catch((err) => {
    console.log(err.message);
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