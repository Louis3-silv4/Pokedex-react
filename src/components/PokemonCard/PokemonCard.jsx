import {Card,Img,Info,TextInfo,ButtonInfo,ButtonDetalhar,ButtonFavoriteCard} from './styles'

export default function PokemonCard({name,sprites,id}){
  return(
    <Card>
      <Img>
        <img src={sprites.other.home.front_default} alt={name}/>
      </Img>
      <Info>
        <TextInfo>
          <span class='pokemon-id'>#${id}</span>
          <h3 class='pokemon-name'>${name}</h3>
        </TextInfo>
        <ButtonInfo>
          <ButtonDetalhar onclick='detalharCard(${JSON.stringify(pokemon)})' alt='Para obter mais informações'>Detalhar</ButtonDetalhar>
          <ButtonFavoriteCard onclick='favoriteCard(${JSON.stringify(pokemon)})' alt='Favorite seu pokemon preferido'>Favorite</ButtonFavoriteCard>
        </ButtonInfo>
      </Info>
    </Card>
  )
}