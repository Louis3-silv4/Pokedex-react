import {TopBarContainer,Title,FavoriteContainer,ButtonFavorite,IconFavorite,Span} from './styles'
import SearchBar from '../SearchBar/SearchBar'

export default function TopBar (){
  return(
    <TopBarContainer>
      <Title> Escolha seu Pokémon</Title>
      <FavoriteContainer>
        <ButtonFavorite>
          <IconFavorite src="src/assets/icons8-favorite-48.png"></IconFavorite>
        </ButtonFavorite>
        <Span alt="Pokemons favoritados">Favoritos</Span>
      </FavoriteContainer>
      <SearchBar>
      </SearchBar>
    </TopBarContainer>

  )
}