import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Card} from '../store/types'; // Assuming you have a Card type defined

interface CardDetailProps {
  card: Card;
  onSave: () => void;
  onRemove: () => void;
  isSaved: boolean;
}

const CardDetail: React.FC<CardDetailProps> = ({
  card,
  onSave,
  onRemove,
  isSaved,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{card.name}</Text>
      <Text style={styles.type}>Type: {card.type}</Text>
      <Text style={styles.hp}>HP: {card.hp}</Text>
      <Button
        title={isSaved ? 'Remove Card' : 'Save Card'}
        onPress={isSaved ? onRemove : onSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  type: {
    fontSize: 16,
    marginBottom: 5,
  },
  hp: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default CardDetail;
