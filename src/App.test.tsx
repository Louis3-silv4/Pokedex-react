import App from "./App"
import {render,screen} from "@testing-library/react"

describe('Test jest', () => {
  it('should works', () => {
    expect(1).toBe(1)
  })
  it('should render component', () =>{
    render(<App/>)
    expect(screen.getByTestId('container-header')).toBeInTheDocument()
  })
})
