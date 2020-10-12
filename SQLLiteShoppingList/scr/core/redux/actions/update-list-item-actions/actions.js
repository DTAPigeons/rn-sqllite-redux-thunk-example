import * as actionTypes from './action-types';
//import {createDatabaseEntryFromItem} from '../../../firebase/data/item-factory';
import {executeUpdateQuery} from '../util';
import {getShoppingItemByIDQuery} from '../../../sql/queries/shoppingItemQueries';
import {getShoppingItemFromData} from '../../../sql/data-processors/data-processor';

export function itemSelectedAction(item) {
  return {
    type: actionTypes.ITEM_SELECTED,
    payload: item,
  };
}

export function updateListItemAction(item) {
  return async (dispatch, getState) => {
    const database = getState().dbReducer.database;
    executeUpdateQuery(database, item)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.UPDATE_LIST_ITEM_SUCCESS,
          payload: item,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function cleareUpdateItemAction() {
  return {
    type: actionTypes.CLEARE_UPDATE_ITEM,
  };
}

export function selectItemFromDataBaseAction(id) {
  return async (dispatch, getState) => {
    const database = getState().dbReducer.database;
    database
      .executeQuery(getShoppingItemByIDQuery, [id])
      .then((result) => {
        const data = result[0];
        dispatch({
          type: actionTypes.SELECT_ITEM_FROM_DATA_BASE,
          payload: getShoppingItemFromData(data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
/*



export function updateListItemSuccessAction(){
    return{
        type: actionTypes.UPDATE_LIST_ITEM_SUCCESS
    }
}

export function selectItemFromDataBaseAction(id){
    return{
        type: actionTypes.SELECT_ITEM_FROM_DATA_BASE,
        payload: id
    }
}

export function selectItemFromDataBaseSuccessAction(item){
    return{
        type: actionTypes.SELECT_ITEM_FROM_DATA_BASE_SUCCESS,
        payload: item
    }
}



export function toggleCatologAction(){
    return{
        type: actionTypes.TOGGLE_CATALOG
    }
}
*/
