import {Card,Info,TextInfo,ButtonInfo,ButtonDetalhar,ButtonFavoriteCard} from './styles'

export default function PokemonCard({name,image,id}){
  return(
    <Card>
        <img alt={name} src={image} style={{width: 100}}/>
      <Info>
        <TextInfo>
          <span className ='pokemon-id'>#{id}</span>
          <h3 className='pokemon-name'>{name}</h3>
        </TextInfo>
        <ButtonInfo>
          <ButtonDetalhar onclick='detalharCard((pokemon))' alt='Para obter mais informações'>Detalhar</ButtonDetalhar>
          <ButtonFavoriteCard onclick='favoriteCard((pokemon))' alt='Favorite seu pokemon preferido'>Favorite</ButtonFavoriteCard>
        </ButtonInfo>
      </Info>
    </Card>
  )
}