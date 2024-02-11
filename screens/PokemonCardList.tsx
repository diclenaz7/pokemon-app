import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemonCards} from '../store/actions/fetchPokemonCards';
import {RootState} from '../store/types';

export const PokemonCardsListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const cards = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(fetchPokemonCards(page, () => setIsLoading(false)));
    console.log('Cards', cards);
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const renderCardItem = ({item}: {item: any}) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Image
          source={{uri: item.imageUrl}}
          style={{width: 100, height: 100, marginRight: 10}}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={cards}
          renderItem={renderCardItem}
          keyExtractor={item => item.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default PokemonCardsListScreen;
