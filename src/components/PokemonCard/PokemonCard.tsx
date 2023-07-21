import { useContext, useState} from 'react';
import React from 'react';
import {Card,Info,TextInfo,ButtonInfo,ButtonDetalhar,ButtonFavoriteCard,ButtonUnfavoriteCard} from './styles'
import { FavoriteContext, FavoriteContextType } from "../../context/FavoritesContext";
import {Modal} from '../Modal/Modal';
import { Pokemon } from '../../types/Pokemon';

export  const PokemonCard: React.FC<{pokemon:Pokemon,isFavorite:boolean}> = ({pokemon,isFavorite}) => {

 const buttonFavorite = <ButtonFavoriteCard  onClick={()=>{favoritePokemonCard(pokemon)}} title='Adicionar aos favoritos' >Favorite</ButtonFavoriteCard>
 const buttonUnfavorite = <ButtonUnfavoriteCard onClick={()=>{unFavoritePokemon(pokemon)}} title='Retirar dos favoritos' >Unfavorite</ButtonUnfavoriteCard>

  const {name,id} = pokemon 
  const image = pokemon.sprites?.other?.home?.front_default
  
  const {favoritePokemonCard,unFavoritePokemon} = useContext(FavoriteContext) as FavoriteContextType
  const [openModal,setOpenModal] = useState(false)

  function handleModalOpen(): void {
    setOpenModal(true);
  }
  const handleModalClose = (): void=> {
    setOpenModal(false)
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
          <ButtonDetalhar  onClick={handleModalOpen} title='Para obter mais informações'>Detalhar</ButtonDetalhar>
          <Modal isOpen={openModal} isClose={handleModalClose} pokemon={pokemon}/>
          {isFavorite ? buttonUnfavorite : buttonFavorite}
        </ButtonInfo>
      </Info>
    </Card>
  )
}