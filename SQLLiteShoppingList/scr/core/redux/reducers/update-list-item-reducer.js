import * as types from '../actions/update-list-item-actions/action-types';

const initialState = {
  selectedItem: {name: '', bought: 0},
  updated: false,
  catalogToggled: false,
};

export function updateListItemReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case types.ITEM_SELECTED:
      return {...state, selectedItem: payload};
    case types.TOGGLE_CATALOG:
      return {...state, catalogToggled: !state.catalogToggled};
    case types.UPDATE_LIST_ITEM_SUCCESS:
      console.log('Updating success');
      return {...state, updated: true};
    case types.CLEARE_UPDATE_ITEM:
      return {...state, ...initialState};
    case types.SELECT_ITEM_FROM_DATA_BASE:
      return {...state, selectedItem: action.payload};
    default:
      return state;
  }

  /*switch(action.type){
        case ITEM_SELECTED:
            return {...state, selectedItem : action.payload};
        case UPDATE_LIST_ITEM_SUCCESS:
            console.log("Updating success");
            return {...state, updated: true}
        case SELECT_ITEM_FROM_DATA_BASE_SUCCESS:
            console.log("reducer"+action.payload.name);
            return {...state, selectedItem: action.payload};
        case CLEARE_UPDATE_ITEM:
            console.log("clearing");
            return {...initialState};
        case TOGGLE_CATALOG:
            return {...state, catalogToggled: !state.catalogToggled};
        default:
            return state;
    }
    */
}
