import { createContext, useState } from "react";
import React from "react";
import { Pokemon } from "../types/Pokemon";

export type SearchContextType = {
  pokemon: Pokemon | null
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const SearchProvider = ({children}:any)=>{
  const [pokemon,setPokemon] = useState<Pokemon | null>(null)
  return (
      <SearchContext.Provider value={{pokemon,setPokemon}}>
        {children}
      </SearchContext.Provider>
  )
}