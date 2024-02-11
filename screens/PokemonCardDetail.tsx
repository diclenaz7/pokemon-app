import React, {useEffect} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/types';
import {saveCard} from '../store/actions/saveCard';
import {removeCard} from '../store/actions/removeCard';

interface PokemonCardDetailProps {
  route: any;
}

export const PokemonCardDetailScreen: React.FC<PokemonCardDetailProps> = ({
  route,
}) => {
  const {cardId} = route.params;
  const dispatch = useDispatch();
  const card = useSelector((state: RootState) =>
    state.cards.find(card => card.id === cardId),
  );

  useEffect(() => {
    // Fetch card details by cardId if needed
  }, []);

  const handleSaveRemoveCard = () => {
    if (card?.saved) {
      dispatch(removeCard(cardId));
    } else {
      dispatch(saveCard(cardId));
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {card ? (
        <>
          <Image
            source={{uri: card.imageUrl}}
            style={{width: 200, height: 200, marginBottom: 20}}
          />
          <Text>Name: {card.name}</Text>
          <Text>Type: {card.type}</Text>
          <Text>HP: {card.hp}</Text>
          <Text>Abilities: {card.abilities.join(', ')}</Text>
          <Button
            title={card.saved ? 'Remove Card' : 'Save Card'}
            onPress={handleSaveRemoveCard}
          />
        </>
      ) : (
        <Text>Card details not found</Text>
      )}
    </View>
  );
};

export default PokemonCardDetailScreen;
