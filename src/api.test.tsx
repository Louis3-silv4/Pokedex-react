import { getPokemon, searchPokemon } from "./api"

describe("API", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("getPokemon", () => {
    it ("should fetch and return an array of pokemons",async () => {
  
      const mockResponse = {
        status: 200,
        json: jest.fn().mockResolvedValue({
          results:[
            {url: 'https://pokeapi.co/api/v2/pokemon/1/',name:'bulbasaur'},
            {url: 'https://pokeapi.co/api/v2/pokemon/2/',name:'ivysaur'},
            {url: 'https://pokeapi.co/api/v2/pokemon/3/',name:'venusaur'}
          ]
        })
      }
      const fetchMock = jest.spyOn(global,'fetch').mockResolvedValue(mockResponse as unknown as Response) 
      const pokemons = await getPokemon(3)
      
      expect(fetchMock).toBeCalled()
      expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=3')
      expect(pokemons).toHaveLength(3)
    })
  
    it('should return an empty array if the response status is not 200', async ()=>{
      const mockResponse = {
        status: 404,
        json: jest.fn().mockResolvedValue({ })
      }
      const fetchMock = jest.spyOn(global,'fetch').mockResolvedValue(mockResponse as unknown as Response) 
      const pokemons = await getPokemon(3)
      
      expect(fetchMock).toBeCalled()
      expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=3')
      expect(pokemons).toHaveLength(0)
    })
  })
  describe('searchPokemons', ()=>{
    it('should fetch and set the Pokemon data when a valid term', async () => {
      const pokemonTerm = 'pikachu';
      const mockResponse = { name: 'pikachu'};
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockResolvedValueOnce({
          json: jest.fn().mockResolvedValueOnce(mockResponse),
        } as unknown as Response);
  
      const setPokemonCallback = jest.fn();
  
      await searchPokemon(pokemonTerm, setPokemonCallback);
  
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/${pokemonTerm}`);

      await new Promise((resolve) => setTimeout(resolve, 0))
  
      expect(setPokemonCallback).toHaveBeenCalledTimes(1);
      expect(setPokemonCallback).toHaveBeenCalledWith({ name: 'pikachu'});
    })
    it('should set the Pokemon callback to null when an error occurs during the fetch', async() => {
      const pokemonTerm = 'nonexistent-pokemon';
      const fetchMock = jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch'));
      const setPokemonCallback = jest.fn();
  
      await searchPokemon(pokemonTerm, setPokemonCallback);
  
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/${pokemonTerm}`);
  
      await new Promise((resolve) => setTimeout(resolve, 0)); // Esperar pela rejeição do fetch
  
      expect(setPokemonCallback).toHaveBeenCalledTimes(1);
      expect(setPokemonCallback).toHaveBeenCalledWith(null);
    })
  })
})