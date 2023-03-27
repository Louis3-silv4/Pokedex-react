import { useContext } from 'react';
import {Card,Info,TextInfo,ButtonInfo,ButtonDetalhar,ButtonFavoriteCard,ButtonUnfavoriteCard} from './styles'
import { FavoriteContext } from "../../context/FavoritesContext";


export default function PokemonCard({pokemon,isFavorite}){

 const buttonFavorite = <ButtonFavoriteCard  onClick={()=>{favoritePokemonCard(pokemon)}} alt='Adicionar aos favoritos' >Favorite</ButtonFavoriteCard>
 const buttonUnfavorite = <ButtonUnfavoriteCard  onClick={()=>{unFavoritePokemon(pokemon)}} alt='Retirar dos favoritos' >Unfavorite</ButtonUnfavoriteCard>

  const {name,id} = pokemon 
  const image = pokemon.sprites.other.home.front_default
  
  const {favoritePokemonCard,unFavoritePokemon} = useContext(FavoriteContext)
  return(
    <Card>
        <img alt={name} src={image} style={{width: 100}}/>
      <Info>
        <TextInfo>
          <span className ='pokemon-id'>#{id}</span>
          <h3 className='pokemon-name'>{name}</h3>
        </TextInfo>
        <ButtonInfo>
          <ButtonDetalhar alt='Para obter mais informações'>Detalhar</ButtonDetalhar>
          {isFavorite ? buttonUnfavorite : buttonFavorite}
        </ButtonInfo>
      </Info>
    </Card>
  )
}