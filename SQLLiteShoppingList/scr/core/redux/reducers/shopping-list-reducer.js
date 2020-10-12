import * as types from '../actions/shopping-list-actions/action-types';

const initialState = {
  shoppingList: [],
  itemToDelete: undefined,
  editToggled: false,
};

export function shoppingListReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case types.FETCH_SHOPPING_LIST:
      return {...state, shoppingList: payload.shoppingList};
    case types.TOGGLE_EDIT:
      return {...state, editToggled: !state.editToggled};
    case types.TOGGLE_DELETE_DIALOG: {
      return {...state, itemToDelete: payload};
    }
    case types.DELECT_SHOPPING_LIST_ITEM: {
      const filteredList = state.shoppingList.filter((item) => {
        item.ID === payload.ID;
      });
      return {...state, shoppingList: filteredList, itemToDelete: undefined};
    }
    default:
      return state;
  }
}
