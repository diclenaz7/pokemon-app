const BASE_URL = 'https://api.pokemontcg.io/v2';

export const fetchPokemonCard = async (page: number) => {
  try {
    const response = await fetch(`${BASE_URL}/cards?page=${page}&pageSize=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon cards');
    }
    console.log('Fetched response', response);
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch Pokémon cards');
  }
};
