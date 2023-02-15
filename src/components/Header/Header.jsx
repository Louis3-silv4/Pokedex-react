import {Img, ContainerHeader,NavMenu,NavItem} from './styles'

export default function Header (){
  return (
    <ContainerHeader>
      <Img src="src/assets/pokedex-3d-logo.png" alt="logo pokedex"></Img>
      <NavMenu>
        <NavItem href="https://www.linkedin.com/in/louise-alves-/" alt="Link para site externo" target="_blank">Linkedin</NavItem>
        <NavItem href="https://github.com/Louis3-silv4" alt="Link para site externo" target="_blank">Github</NavItem>
      </NavMenu>
    </ContainerHeader>
  )
}
