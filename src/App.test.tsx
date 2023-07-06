import App from "./App"
import {render,screen} from "@testing-library/react"

describe('Test jest', () => {
  it('should works', () => {
    expect(1).toBe(1)
  })
  it('should render App component', () =>{
    render(<App/>)
    expect(screen.getByTestId('container-header')).toBeInTheDocument()
    expect(screen.getByTestId('container-topbar')).toBeInTheDocument()
    //To-do: Como testar o componente <PokedexRoute/>
  })
})
