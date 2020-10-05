import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text
} from 'react-native';

import { Provider } from 'react-redux';
import { store} from './scr/core/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  UpdateShoppingItemClass from './scr/components/shopping-items/update-shopping-item/UpdateShoppingItemClass';
import {ShoppingList} from './scr/components/shopping-items/shopping-list/ShoppingList';
import { DBWrapper } from "./scr/components/wrappers/db-wrapper";

const App = ()  => {
  const Stack = createStackNavigator();
  return (
    <>
    <Provider store={store}>
    <NavigationContainer>
                <Stack.Navigator initialRouteName="List">
                    <Stack.Screen name="List" component={ShoppingList} options={{ title: 'Shopping List' }}></Stack.Screen>
                    <Stack.Screen name="Update" component={UpdateShoppingItemClass} options={{ title: 'Update Item' }}></Stack.Screen>
                </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
};

export default App;
