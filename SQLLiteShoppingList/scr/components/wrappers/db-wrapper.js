import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  openDBAction,
  closeDBAction,
} from '../../core/redux/actions/db-actions/actions';
import {createStackNavigator} from '@react-navigation/stack';
import {UpdateShoppingItem} from '../shopping-items/update-shopping-item/UpdateShoppingItem';
import {ShoppingList} from '../shopping-items/shopping-list/ShoppingList';
import {seedDb} from '../../core/typeorm/db';

export const DBWrapper = () => {
  const dispatch = useDispatch();

  const Stack = createStackNavigator();

  useEffect(() => {
    //  seedDb();
    dispatch(openDBAction());
    return () => {
      dispatch(closeDBAction());
    };
  }, [dispatch]);

  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ShoppingList}
        options={{title: 'Shopping List'}}></Stack.Screen>
      <Stack.Screen
        name="Update"
        component={UpdateShoppingItem}
        options={{title: 'Update Item'}}></Stack.Screen>
    </Stack.Navigator>
  );
};
