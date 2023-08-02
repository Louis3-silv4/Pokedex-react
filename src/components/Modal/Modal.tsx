import React from 'react'
import typeColors from '../../utils/typeColors'
import {PokemonModal,ModalCard,Header,Content,StatsLeft,StatsRight,Stat,StatDesc,ProgressBar} from './styles'
import { Pokemon } from '../../types/Pokemon'

type ModalType = {
  isOpen: boolean,
  isClose: () => void,
  pokemon: Pokemon
}

export const Modal: React.FC<ModalType> = ({isOpen, isClose, pokemon}) => {
  const {id, name, types,weight,height,sprites,stats} = pokemon
  const typeClass = types?.[0]?.type?.name
  const bgColor = typeColors[typeClass]

  if (isOpen) {
    return( 
      <PokemonModal data-testId="container-modal">
        <ModalCard>
              <Header>
                <div>#{id}</div>
                <div>{name}</div>
                <button className="close-modal" data-testId="fechar" onClick={isClose}>X</button>
              </Header>
              <Content>
                <StatsLeft>
                  <div className="stat-row">
                    <div className="stat">Type</div>
                    <StatDesc className={`stat-desc ${typeClass}`} bgColor={bgColor}>
                      {typeClass}
                    </StatDesc>
                  </div>
                  <div className="stat-row">
                    <div className="stat">Peso</div>
                    <div className="stat-number">{weight}Kg</div>
                  </div>
                  <div className="stat-row">
                    <div className="stat">Altura</div>
                    <div className="stat-number">{height} cm</div>
                  </div>
                </StatsLeft>
                <img className="modal-img" src={sprites.other.home.front_default} alt={`Pokemon ${name}`} style={{width: 250}}/>
                <StatsRight>
                  <div className="stat-row">
                    <Stat>HP</Stat>
                    <div className="stat-bar">
                      <ProgressBar  className={`progress-bar ${typeClass}`}
                        max="100"
                        value={stats[0]?.base_stat}
                        bgColor={bgColor}>
                        {typeClass}
                      </ProgressBar>
                    </div>
                  </div>
                  <div className="stat-row">
                    <Stat>Attack</Stat>
                    <div className="stat-bar">
                     <ProgressBar  className={`progress-bar ${typeClass}`}
                        max="100"
                        value={stats[1]?.base_stat}
                        bgColor={bgColor}>
                      </ProgressBar>
                    </div>
                  </div>
                  <div className="stat-row">
                    <Stat>Defense</Stat>
                    <div className="stat-bar">
                     <ProgressBar  className={`progress-bar ${typeClass}`}
                        max="100"
                        value={stats[2]?.base_stat}
                        bgColor={bgColor}>
                      </ProgressBar>
                    </div>
                  </div>
                </StatsRight>
              </Content>
          </ModalCard>
        </PokemonModal>
    )
  }else{
    return null;
  }

   
  
}