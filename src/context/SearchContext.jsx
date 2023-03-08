import { createContext, useState } from "react";

export const SearchContext = createContext(null)

export const SearchProvider = ({children}) =>{
  const [pokemon,setPokemon] = useState({ })
  return (
      <SearchContext.Provider value={{pokemon,setPokemon}}>
        {children}
      </SearchContext.Provider>
  )
}