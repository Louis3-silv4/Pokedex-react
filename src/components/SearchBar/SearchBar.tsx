import React, { useContext, useState, ChangeEvent } from 'react';
import { SearchContainer, Input, SearchButton, Img } from './styles';
import { searchPokemon } from '../../api';
import { SearchContext,SearchContextType } from "../../context/SearchContext";

const SearchBar: React.FC = () =>{
  const [search, setSearch] = useState("");
  const { pokemon, setPokemon } = useContext(SearchContext) as SearchContextType;

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  }

  const onButtonHandler = (): void => {
    console.log(pokemon);
    onSearchHandler();
  }

  const onSearchHandler = async (): Promise<void> => {
    searchPokemon(search, setPokemon);
  }

  return (
    <SearchContainer>
      <Input type="text" placeholder="Procure seu pokémon" onChange={onInputHandler} />
      <SearchButton type="submit" className="btn-search" id="btn-search" onClick={onButtonHandler}>
        <Img src="src/assets/lupa.svg" alt="Clique para procurar" />
      </SearchButton>
    </SearchContainer>
  );
}

export default SearchBar
