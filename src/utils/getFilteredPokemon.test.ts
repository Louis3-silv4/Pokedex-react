import getFilteredPokemon from "./getFilteredPokemon"
import { mockPokemon } from "./mocks/PokemonMock"

describe("Function|getFilteredPokemon", () => {
  const mockPokemonArray = [
    mockPokemon,
    {...mockPokemon,id:2,name:'Charizard'}
  ]
  it("should render the filtered pokemon with the specified ID",() => {
    const id = 2
    const result = getFilteredPokemon(mockPokemonArray,id)
    const expectedResult = mockPokemonArray[1]

    expect(result).toContainEqual(expectedResult)
  })
  it("should return allPokemon when hasFilteredPokemon is false",() => {
    const id = 10
    const result = getFilteredPokemon(mockPokemonArray,id)
    const expectedResult = mockPokemonArray

    expect(result).toEqual(expectedResult)
  })
})