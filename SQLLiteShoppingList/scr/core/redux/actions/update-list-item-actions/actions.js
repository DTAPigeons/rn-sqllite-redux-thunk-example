import * as actionTypes from './action-types';
//import {createDatabaseEntryFromItem} from '../../../firebase/data/item-factory';
import {insertShoppingItemQuery} from '../../../sql/queries/shoppingItemQueries';

export function itemSelectedAction(item) {
  return {
    type: actionTypes.ITEM_SELECTED,
    payload: item,
  };
}

export function updateListItemAction(item) {
  return async (dispatch, getState) => {
    const database = getState().dbReducer.database;

    database
      .executeQuery(insertShoppingItemQuery, [item.CATALOGUEID, 0])
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.UPDATE_LIST_ITEM_SUCCESS,
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
