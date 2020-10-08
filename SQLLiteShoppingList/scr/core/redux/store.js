import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { dbReducer } from "./reducers/db-reducer";
import { shoppingListReducer } from "../redux/reducers/shopping-list-reducer";
import { catalogReducer } from "../redux/reducers/catalog-reducer";
import { updateListItemReducer } from "./reducers/update-list-item-reducer";

const reducer = combineReducers({dbReducer, shoppingListReducer, catalogReducer, updateListItemReducer});

export const store = createStore(reducer, applyMiddleware(thunk));