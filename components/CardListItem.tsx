import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface Card {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  hp: number;
}

interface CardListItemProps {
  card: Card;
  onPress: () => void;
}

const CardListItem: React.FC<CardListItemProps> = ({card, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{uri: card.imageUrl}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{card.name}</Text>
          <Text style={styles.type}>{card.type}</Text>
          <Text style={styles.hp}>HP: {card.hp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 16,
    color: '#666',
  },
  hp: {
    fontSize: 16,
    color: '#666',
  },
});

export default CardListItem;
