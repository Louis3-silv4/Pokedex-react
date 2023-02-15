import {SearchContainer,Input,SearchButton,Img} from './styles'

export default function SearchBar (){

  const  searchHandler = (e) =>{

  }
  return(
    <SearchContainer>
      <Input type="text" placeholder="Procure seu pokémon" ></Input> 
      <SearchButton type="submit" className="btn-search" id="btn-search" onClick={searchHandler}>
        <Img src="src/assets/lupa.svg" alt="Clique para procurar"></Img>
      </SearchButton>
    </SearchContainer>
  )
}