import React from 'react'
import {TopBarContainer,Title,FavoriteContainer,IconFavorite,Link} from './styles'
import SearchBar from '../SearchBar/SearchBar'

const TopBar: React.FC = () =>{
  return(
    <TopBarContainer data-testId='container-topbar'>
      <Title> Escolha seu Pokémon</Title>
      <FavoriteContainer>
        <Link href='/favoritos' title="Pokemons favoritados">
          <IconFavorite src="src/assets/icons8-favorite-48.png" alt="icon favorito"/>
          Favoritos
        </Link>
      </FavoriteContainer>
      <SearchBar/>
    </TopBarContainer>
  )
}

export default TopBar