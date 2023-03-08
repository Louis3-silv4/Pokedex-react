import { useState } from 'react';
import {Card,Info,TextInfo,ButtonInfo,ButtonDetalhar,ButtonFavoriteCard} from './styles'

export default function PokemonCard({name,image,id}){
  
  const [isFavorite, setIsFavorite] = useState(false);
  const redHeart = "❤️"
  const blackHeart = "🖤"
  const heart = isFavorite ? redHeart : blackHeart

  const clickheart = (e) =>{
    console.log(isFavorite)
    setIsFavorite(!isFavorite);
    console.log(isFavorite)
  }
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
          <ButtonFavoriteCard onclick={clickheart} alt='Adicionar aos favoritos'>{heart}</ButtonFavoriteCard>
        </ButtonInfo>
      </Info>
    </Card>
  )
}