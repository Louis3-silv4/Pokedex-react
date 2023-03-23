import { useContext } from 'react';
import {Card,Info,TextInfo,ButtonInfo,ButtonDetalhar,ButtonFavoriteCard} from './styles'
import { FavoriteContext } from "../../context/FavoritesContext";


export default function PokemonCard({pokemon}){
  const {name,id} = pokemon 
  const image = pokemon.sprites.other.home.front_default
  
  const {favoritePokemonCard} = useContext(FavoriteContext)
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
          <ButtonFavoriteCard  onClick={()=>{favoritePokemonCard(pokemon)}} alt='Adicionar aos favoritos' >Favorite</ButtonFavoriteCard>
        </ButtonInfo>
      </Info>
    </Card>
  )
}