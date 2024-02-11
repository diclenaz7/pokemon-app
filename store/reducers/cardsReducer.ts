import {Card} from '../types';
import {FETCH_POKEMON_CARDS_SUCCESS, SAVE_CARD, REMOVE_CARD} from '../types';

const initialState: Card[] = [];

export const cardsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_POKEMON_CARDS_SUCCESS:
      return [...state, ...action.payload];
    case SAVE_CARD:
      return state.map(card =>
        card.id === action.payload ? {...card, saved: true} : card,
      );
    case REMOVE_CARD:
      return state.map(card =>
        card.id === action.payload ? {...card, saved: false} : card,
      );
    default:
      return state;
  }
};
