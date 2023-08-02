import { render ,screen} from "@testing-library/react";
import { Modal } from "./Modal";
import { mockPokemon } from "../../utils/mocks/PokemonMock";

describe("Component|Modal", () => {
  it ("should render modal when isOpen is true", () => {
    render(<Modal isOpen={true} isClose={() => {}} pokemon={mockPokemon} />);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('#25')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getAllByText('electric')).toHaveLength(2);
  })
  it("should not render modal when isOpen is false", () => {
    render(<Modal isOpen={false} isClose={() => {}} pokemon={mockPokemon} />);
    
    expect(screen.queryByTestId('container-modal')).toBeNull();
  })
})