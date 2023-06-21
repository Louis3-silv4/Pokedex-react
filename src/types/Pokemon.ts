export type Pokemon = {
  name: string
  url: string
  id: number
  sprites: {
      other: {
        home: {
          front_default: string;
        };
      };
  };
  weight: number
  height: number
  stats: PokemonStats[]
  types: PokemonType[]
  isFavorite: boolean
}

export type PokemonStats ={
  base_stat: number 
  name: string
}

export type PokemonType = {
  type: {
    name: string
  }
}