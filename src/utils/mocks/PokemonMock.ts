import { Pokemon } from "../../types/Pokemon";

export const mockPokemon:Pokemon = {
  name: "Pikachu",
  id: 25,
  sprites: {
    other: {
      home: {
        front_default: "pikachu.png"
      }
    }
  },
  url: "",
  weight: 0,
  height: 0,
  stats: [],
  types: [
    {type:
      {name:"electric"}
    }
  ],
  isFavorite: false
}