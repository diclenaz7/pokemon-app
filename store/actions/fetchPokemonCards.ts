import {Dispatch, UnknownAction} from 'redux';
import {
  FETCH_POKEMON_CARDS_REQUEST,
  FETCH_POKEMON_CARDS_SUCCESS,
  FETCH_POKEMON_CARDS_FAILURE,
} from '../types';
import {fetchPokemonCard} from '../../services/api';

export const fetchPokemonCardsRequest = () => ({
  type: FETCH_POKEMON_CARDS_REQUEST,
});

export const fetchPokemonCardsSuccess = (cards: any[]) => ({
  type: FETCH_POKEMON_CARDS_SUCCESS,
  payload: cards,
});

export const fetchPokemonCardsFailure = (error: string) => ({
  type: FETCH_POKEMON_CARDS_FAILURE,
  payload: error,
});

export const fetchPokemonCards = (page: number, callback: () => void) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPokemonCardsRequest());

    try {
      const response = await fetchPokemonCard(page);
      dispatch(fetchPokemonCardsSuccess(response.data.cards));
    } catch (error: any) {
      dispatch(fetchPokemonCardsFailure(error.message));
    } finally {
      callback(); // Callback to indicate loading is complete
    }
  };
};
