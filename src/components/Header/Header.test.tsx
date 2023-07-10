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
  //Primeiro modo
  const imagePokedex = screen.getByRole('img', {
    name: /logo pokedex/i
  })
  expect(imagePokedex).toBeInTheDocument()
//Segundo modo
  expect(screen.getByAltText('logo pokedex')).toBeInTheDocument()
 })
 
 it("should render github and linkedin link", () => {
  render(<Header/>)
  //Primeiro modo
 const linkedinLink = screen.getByAltText("Link para site externo")
 expect(linkedinLink).toBeInTheDocument()
 expect(linkedinLink.getAttribute("href")).toBe("https://www.linkedin.com/in/louise-alves-/ s")

 const githubLink = screen.getByAltText("Link para site externo")
 expect(githubLink).toBeInTheDocument()
 expect(githubLink.getAttribute("href")).toBe("https://github.com/Louis3-silv4")

 //Segundo modo
 const gitHubLinkRole = screen.getByRole('link', { name: /github/i })
 expect(gitHubLinkRole).toBeInTheDocument()

 const linkedinLinkRole = screen.getByRole('link', { name: /linkedin/i })
 expect(linkedinLinkRole).toBeInTheDocument()

 })
})