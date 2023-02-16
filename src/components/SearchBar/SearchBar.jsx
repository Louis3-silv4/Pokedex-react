import {SearchContainer,Input,SearchButton,Img, Title} from './styles'
import { useState } from 'react'
import {searchPokemon} from '../../api'

export default function SearchBar (){
  const [search,setSearch] = useState("")

  const  onInputHandler = (e) =>{
    console.log("pokemon:", e.target.value)
    const inputSearch= e.target.value
    setSearch(inputSearch)
  }

  const  onButtonHandler = () =>{
    console.log("pokemon:", search)
    searchPokemon(search)
  }
  return(
    <SearchContainer>
      <Input type="text" placeholder="Procure seu pokémon" onChange={onInputHandler}></Input> 
      <SearchButton type="submit" className="btn-search" id="btn-search" onClick={onButtonHandler}>
        <Img src="src/assets/lupa.svg" alt="Clique para procurar"></Img>
      </SearchButton>
      <p>{search}</p>
    </SearchContainer>
  )
}