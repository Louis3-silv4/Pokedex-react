import { render,screen, waitFor } from "@testing-library/react"
import TopBar from "./TopBar"
import { SearchProvider } from "../../context/SearchContext";
import { Link } from "./styles";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Router } from "react-router-dom";

describe("Component|TopBar", () => {
  it('should render component topbar', () => {
    render(
     <SearchProvider>
       <TopBar />
     </SearchProvider>
    )

    expect(screen.getByTestId('container-topbar')).toBeInTheDocument()
  })

  it('should render the title in the topbar ', () => {
    render(
     <SearchProvider>
       <TopBar />
     </SearchProvider>
    )

    expect(screen.getByText('Escolha seu Pokémon')).toBeInTheDocument();
  })

  it('should render the button favoritos in the topbar ', () => {
    render(
     <SearchProvider>
       <TopBar />
     </SearchProvider>
    )

    expect(screen.getByRole('link',{ name: /Favoritos/i })).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /icon favorito/i})).toBeInTheDocument();
  }) 
})
