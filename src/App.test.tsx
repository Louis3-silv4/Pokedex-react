import App from "./App"
import {render,screen} from "@testing-library/react"

describe('App', () => {
  it('should works', () => {
    expect(1).toBe(1)
  })
  it('should render component header', () =>{
    render(<App/>)
    
    expect(screen.getByTestId('container-header')).toBeInTheDocument()
  })
  it('should render component topbar', () =>{
    render(<App/>)
    expect(screen.getByTestId('container-topbar')).toBeInTheDocument()
  })

  it('should render component pokedex route', () =>{
    render(<App/>)
    expect(screen.getByTestId('container-pokedexRoute')).toBeInTheDocument()
  })
})
