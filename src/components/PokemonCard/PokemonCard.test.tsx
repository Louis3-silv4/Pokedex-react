import { render,screen, waitFor} from "@testing-library/react"
import PokemonCard from "./PokemonCard"
import {FavoriteContext, FavoriteProvider } from "../../context/FavoritesContext"
import userEvent from "@testing-library/user-event";
import { mockPokemon } from "../../utils/mocks/PokemonMock";

describe("Component|PokemonCard", () => {
  const mockFavoritePokemonCard = jest.fn();
  const mockUnFavoritePokemon = jest.fn();
  
  const mockFavoriteContextValue = {
    favoritesPokemon:[],
    favoritePokemonCard: mockFavoritePokemonCard,
    unFavoritePokemon: mockUnFavoritePokemon,
  }
  
  it("should renders PokemonCard with favorite button when isFavorite is false",() => {
    render(
      <FavoriteProvider> 
      <PokemonCard pokemon={mockPokemon} isFavorite={false}/>
    </FavoriteProvider>
    )
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('#25')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'pikachu.png');
    expect(screen.getByText('Favorite')).toBeInTheDocument();
  })
  it("should renders PokemonCard with unFavorite button when isFavorite is true",() => {
    render(
      <FavoriteProvider> 
      <PokemonCard pokemon={mockPokemon} isFavorite={true}/>
    </FavoriteProvider>
    )
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('#25')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'pikachu.png');
    expect(screen.getByText('Unfavorite')).toBeInTheDocument();
  })
  it("should calls favoritePokemonCard when clicking on the favorite button",async () => {
    render(
      <FavoriteContext.Provider value={mockFavoriteContextValue}>
        <PokemonCard pokemon={mockPokemon} isFavorite={false} />
      </FavoriteContext.Provider>
    )

    const favoriteButton = screen.getByText('Favorite')

    userEvent.click(favoriteButton);
    await waitFor(() => {
      expect(mockFavoritePokemonCard).toHaveBeenCalledWith(mockPokemon);
    })

  })
  it("should calls unFavoritePokemonCard when clicking on the Unfavorite button",async () => {
    render(
      <FavoriteContext.Provider value={mockFavoriteContextValue}>
        <PokemonCard pokemon={mockPokemon} isFavorite={true} />
      </FavoriteContext.Provider>
    )

    const favoriteButton = screen.getByText('Unfavorite')
    userEvent.click(favoriteButton);

    await waitFor(() => {
      expect(mockUnFavoritePokemon).toHaveBeenCalledWith(mockPokemon);
    })

  })
  it('should open the modal when handleModalOpen is called',async () => {

    render(
      <FavoriteContext.Provider value={mockFavoriteContextValue}>
        <PokemonCard pokemon={mockPokemon} isFavorite={false} />
      </FavoriteContext.Provider>
    );

    expect(screen.queryByTestId('container-modal')).not.toBeInTheDocument();

    const detalharButton = screen.getByRole('button', { name: 'Detalhar' });
    
    userEvent.click(detalharButton);

    await waitFor(() => {
      expect(screen.getByTestId('container-modal')).toBeInTheDocument();
    })
  })
  it('should close the modal when handleModalClose is called',async () => {

    render(
      <FavoriteContext.Provider value={mockFavoriteContextValue}>
        <PokemonCard pokemon={mockPokemon} isFavorite={false} />
      </FavoriteContext.Provider>
    );

    const detalharButton = screen.getByRole('button', { name: 'Detalhar' });
    userEvent.click(detalharButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('container-modal')).toBeInTheDocument();

    })

    const closeButton = screen.getByTestId('fechar');
    userEvent.click(closeButton);
   
    await waitFor(() => {
      expect(screen.queryByTestId('container-modal')).not.toBeInTheDocument();
    })
  })
})