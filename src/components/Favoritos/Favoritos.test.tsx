import { render,screen } from "@testing-library/react"
import { FavoriteContext, FavoriteContextType} from "../../context/FavoritesContext"
import Favoritos from "./Favoritos";

describe('Component|Favoritos',() => {
  it('should render the component with favorite pokemons',() => {
    const favoritePokemons = [
      { id: 1, name: 'Pikachu', type: 'Electric', image: 'pikachu.png' },
      { id: 2, name: 'Bulbasaur', type: 'Grass', image: 'bulbasaur.png' },
    ];
    
    render(
      <FavoriteContext.Provider value={{ favoritesPokemon: favoritePokemons } as unknown as FavoriteContextType}>
        <Favoritos />
      </FavoriteContext.Provider>
    );

    const containerElement = screen.getByTestId('container-favoritos');
    expect(containerElement).toBeInTheDocument();

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  })

  it('should render the component without favorite pokemons', () => {
    const favoritePokemons: any[] = []
    render(
      <FavoriteContext.Provider value={{ favoritesPokemon: favoritePokemons } as unknown as FavoriteContextType}>
        <Favoritos />
      </FavoriteContext.Provider>
    );
    
    expect(screen.getByText('Não existe pokemon favoritado')).toBeInTheDocument();

  })
})