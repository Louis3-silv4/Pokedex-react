import { describe, it } from "node:test"
import {render,screen} from "@testing-library/react"
import Header from "./Header"

describe("Component|Header", () => {

  it("should render header container", () => {
    render(<Header />)

    expect(screen.getByTestId('container-header')).toBeInTheDocument()
  })
 it ("should render image", () => {
  render(<Header/>)

  expect(screen.getByAltText('logo pokedex')).toBeInTheDocument()
 })
 
 it("should render github and linkedin link", () => {
  render(<Header/>)
  
 const linkedinLink = screen.getByAltText("Link para site externo")
 expect(linkedinLink).toBeInTheDocument()
 expect(linkedinLink.getAttribute("href")).toBe("https://www.linkedin.com/in/louise-alves-/ s")

 const githubLink = screen.getByAltText("Link para site externo")
 expect(githubLink).toBeInTheDocument()
 expect(githubLink.getAttribute("href")).toBe("https://github.com/Louis3-silv4")

 })
})