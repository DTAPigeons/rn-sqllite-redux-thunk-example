import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text
} from 'react-native';

import { Provider } from 'react-redux';
//import { store} from '../ShoppingListAndriod/scr/core/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  UpdateShoppingItemClass from './scr/components/shopping-items/update-shopping-item/UpdateShoppingItemClass';
import {ShoppingList} from './scr/components/shopping-items/shopping-list/ShoppingList';

const App = ()  => {
  const Stack = createStackNavigator();
  return (
    <>

    <NavigationContainer>
                <Stack.Navigator initialRouteName="List">
                    <Stack.Screen name="List" component={ShoppingList} options={{ title: 'Shopping List' }}></Stack.Screen>
                    <Stack.Screen name="Update" component={UpdateShoppingItemClass} options={{ title: 'Update Item' }}></Stack.Screen>
                </Stack.Navigator>
    </NavigationContainer>

    </>
  );
};

export default App;
