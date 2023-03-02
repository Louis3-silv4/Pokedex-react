import {SearchContainer,Input,SearchButton,Img} from './styles'
import { useState } from 'react'
import {searchPokemon} from '../../api'

export default function SearchBar (){
  const [search,setSearch] = useState("")
  const [pokemon,setPokemon] = useState(null)

  const  onInputHandler = (e) =>{
    setSearch(e.target.value)
  }

  const  onButtonHandler = () =>{
    console.log(pokemon)
    onSearchHandler() 
  }

  const  onSearchHandler = async () =>{
    searchPokemon(search,setPokemon)
  }

  return(
    <SearchContainer>
      <Input type="text" placeholder="Procure seu pokémon" onChange={onInputHandler}></Input> 
      <SearchButton type="submit" className="btn-search" id="btn-search" onClick={onButtonHandler}>
        <Img src="src/assets/lupa.svg" alt="Clique para procurar"></Img>
      </SearchButton>
      {pokemon?.id && (
        <div>
          <div>{pokemon.name}</div>
          <div>{pokemon.id}</div>
        </div>
      )} 
    </SearchContainer>
  )
}