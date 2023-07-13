import {render,screen} from "@testing-library/react"
import Header from "./Header"

describe("Component|Header", () => {

  it("should render header container", () => {
    render(<Header />)

    expect(screen.getByTestId('container-header')).toBeInTheDocument()
  })
 it ("should render image", () => {
  render(<Header/>)

  const imagePokedex = screen.getByRole('img', {name: /logo pokedex/i})

  expect(imagePokedex).toBeInTheDocument()
 })
 
 it("should render github and linkedin link", () => {
  render(<Header/>)

 const gitHubLinkRole = screen.getByRole('link', { name: /github/i })
 expect(gitHubLinkRole).toBeInTheDocument()

 const linkedinLinkRole = screen.getByRole('link', { name: /linkedin/i })
 expect(linkedinLinkRole).toBeInTheDocument()

 expect(linkedinLinkRole).toHaveAttribute('href','https://www.linkedin.com/in/louise-alves-/')
 expect(linkedinLinkRole).toHaveAttribute('target', '_blank')
 expect(linkedinLinkRole).toHaveAttribute('alt', 'Link para site externo')

 expect(gitHubLinkRole).toHaveAttribute('href','https://github.com/Louis3-silv4')
 expect(gitHubLinkRole).toHaveAttribute('target', '_blank')
 expect(gitHubLinkRole).toHaveAttribute('alt', 'Link para site externo')

 })
})