import React from 'react'
import {TopBarContainer,Title,FavoriteContainer,IconFavorite,Link} from './styles'
import SearchBar from '../SearchBar/SearchBar'

const TopBar: React.FC = () =>{
  return(
    <TopBarContainer>
      <Title> Escolha seu Pokémon</Title>
      <FavoriteContainer>
        <Link href='/favoritos' title="Pokemons favoritados">
          <IconFavorite src="src/assets/icons8-favorite-48.png"/>
          Favoritos
        </Link>
      </FavoriteContainer>
      <SearchBar/>
    </TopBarContainer>
  )
}

export default TopBar