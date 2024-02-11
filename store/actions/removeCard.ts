import {REMOVE_CARD} from '../types';

// Action creator for removing a card
export const removeCard = (cardId: string) => ({
  type: REMOVE_CARD,
  payload: cardId,
});
