import AsyncStorage from '@react-native-async-storage/async-storage';

const CARD_STORAGE_KEY = 'saved_cards';

export const saveCardToStorage = async (cardId: string) => {
  try {
    // Retrieve existing saved cards from storage
    let savedCards: string[] = [];
    const savedCardsJSON = await AsyncStorage.getItem(CARD_STORAGE_KEY);
    if (savedCardsJSON !== null) {
      savedCards = JSON.parse(savedCardsJSON);
    }

    // Check if the card is already saved
    if (!savedCards.includes(cardId)) {
      // Add the card to saved cards list
      savedCards.push(cardId);
      // Save updated saved cards list to storage
      await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(savedCards));
    }
  } catch (error) {
    throw new Error('Failed to save Pokémon card to storage');
  }
};

export const removeCardFromStorage = async (cardId: string) => {
  try {
    // Retrieve existing saved cards from storage
    let savedCards: string[] = [];
    const savedCardsJSON = await AsyncStorage.getItem(CARD_STORAGE_KEY);
    if (savedCardsJSON !== null) {
      savedCards = JSON.parse(savedCardsJSON);
    }

    // Check if the card exists in saved cards list
    const index = savedCards.indexOf(cardId);
    if (index !== -1) {
      // Remove the card from saved cards list
      savedCards.splice(index, 1);
      // Save updated saved cards list to storage
      await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(savedCards));
    }
  } catch (error) {
    throw new Error('Failed to remove Pokémon card from storage');
  }
};
