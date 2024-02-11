export const FETCH_POKEMON_CARDS_REQUEST = 'FETCH_POKEMON_CARDS_REQUEST';
export const FETCH_POKEMON_CARDS_SUCCESS = 'FETCH_POKEMON_CARDS_SUCCESS';
export const FETCH_POKEMON_CARDS_FAILURE = 'FETCH_POKEMON_CARDS_FAILURE';
export const SAVE_CARD = 'SAVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

// State interface
export interface Card {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  hp: number;
  abilities: string[];
  saved: boolean;
}

export interface RootState {
  cards: Card[];
}
