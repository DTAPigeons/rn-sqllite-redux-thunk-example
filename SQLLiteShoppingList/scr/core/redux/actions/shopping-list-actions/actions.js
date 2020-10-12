import * as types from './action-types';
import {getShoppingItemsQuery} from '../../../sql/queries/shoppingItemQueries';
import {getShoppingItemFromData} from '../../../sql/data-processors/data-processor';
import {deleteShoppingItemQuery} from '../../../sql/queries/shoppingItemQueries';

export const fetchShoppingListAction = () => {
  return async (dispath, getState) => {
    const database = getState().dbReducer.database;

    database.executeQuery(getShoppingItemsQuery).then((result) => {
      const data = result;
      let shoppingList = [];

      for (let i = 0; i < data.length; i++) {
        shoppingList.push(getShoppingItemFromData(data[i]));
      }

      dispath({
        type: types.FETCH_SHOPPING_LIST,
        payload: {
          shoppingList: shoppingList,
        },
      });
    });
  };
};

export function toggleEditAction() {
  return {
    type: types.TOGGLE_EDIT,
  };
}

export function toggleDeleteDialogAction(item) {
  return {
    type: types.TOGGLE_DELETE_DIALOG,
    payload: item,
  };
}

export function deleteShoppingListItemAction(item) {
  return async (dispath, getState) => {
    const database = getState().dbReducer.database;

    database
      .executeQuery(deleteShoppingItemQuery, [item.ID])
      .then((result) => {
        console.log(result);
        dispath({
          type: types.DELECT_SHOPPING_LIST_ITEM,
          payload: {...item},
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   return {
  //     type: types.DELECT_SHOPPING_LIST_ITEM,
  //     payload: item,
  //   };
}
/*


export function syncShoppingListAction() {
    return{
        type: types.SYNC_SHOPPING_LIST
    };
}

export function syncShoppingListStopAction() {
    return{
        type: types.SYNC_SHOPPING_LIST_STOP
    };
}



export function deleteShoppingListItemSuccesAction() {
    return{
        type: types.DELECT_SHOPPING_LIST_ITEM_SUCCES
    };
}


export function toggleEditAction(){
    return{
        type: types.TOGGLE_EDIT
    }
}

export function toggleDeleteDialogAction(item){
    return{
        type: types.TOGGLE_DELETE_DIALOG,
        payload: item
    }
}
*/
