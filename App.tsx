import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './store/store';
import {PokemonCardsListScreen} from './screens/PokemonCardList';
import {PokemonCardDetailScreen} from './screens/PokemonCardDetail';

const Stack = createStackNavigator();

const App = () => {
  console.log('STORE', store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PokemonCardsList"
            component={PokemonCardsListScreen}
            options={{title: 'Pokemon Cards List'}}
          />
          <Stack.Screen
            name="PokemonCardDetail"
            component={PokemonCardDetailScreen}
            options={{title: 'Pokemon Card Detail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
