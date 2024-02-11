import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import PokemonCardsListScreen from '../screens/PokemonCardList';
import PokemonCardDetailScreen from '../screens/PokemonCardDetail';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
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
  );
};

export default AppNavigator;
