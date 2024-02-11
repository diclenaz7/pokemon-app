import {SAVE_CARD} from '../types';

// Action creator for saving a card
export const saveCard = (cardId: string) => ({
  type: SAVE_CARD,
  payload: cardId,
});
