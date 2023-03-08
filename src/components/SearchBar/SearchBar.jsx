import {SearchContainer,Input,SearchButton,Img} from './styles'
import { useContext, useState } from 'react'
import {searchPokemon} from '../../api'
import { SearchContext } from "../../context/SearchContext";

export default function SearchBar (){
  const [search,setSearch] = useState("")
  const {pokemon,setPokemon} = useContext(SearchContext)

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
      </SearchContainer>

  )
}