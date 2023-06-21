import React from 'react'
import {Img, ContainerHeader,NavMenu,NavItem} from './styles'

const Header:React.FC = () => {
  return (
    <ContainerHeader>
      <Img src="src/assets/pokedex-3d-logo.png" alt="logo pokedex"/>
      <NavMenu>
        <NavItem href="https://www.linkedin.com/in/louise-alves-/" alt="Link para site externo" target="_blank">Linkedin</NavItem>
        <NavItem href="https://github.com/Louis3-silv4" alt="Link para site externo" target="_blank">Github</NavItem>
      </NavMenu>
    </ContainerHeader>
  )
}
export default Header