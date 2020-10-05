import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { dbReducer } from "./reducers/db-reducer";
import { shoppingListReducer } from "../redux/reducers/shopping-list-reducer";
import { catalogReducer } from "../redux/reducers/catalog-reducer";

const reducer = combineReducers({dbReducer, shoppingListReducer, catalogReducer});

export const store = createStore(reducer, applyMiddleware(thunk));