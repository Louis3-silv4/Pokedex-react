import {TopBarContainer,Title,FavoriteContainer,ButtonFavorite,IconFavorite,Link} from './styles'
import SearchBar from '../SearchBar/SearchBar'

export default function TopBar (){
  return(
    <TopBarContainer>
      <Title> Escolha seu Pokémon</Title>
      <FavoriteContainer>
        <Link href='/favoritos' alt="Pokemons favoritados">
          <IconFavorite src="src/assets/icons8-favorite-48.png"></IconFavorite>
          Favoritos
        </Link>
      </FavoriteContainer>
      <SearchBar>
      </SearchBar>
    </TopBarContainer>
  )
}