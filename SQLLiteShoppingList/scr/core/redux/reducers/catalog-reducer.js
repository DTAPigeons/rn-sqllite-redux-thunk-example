import { FETCH_CATALOG} from '../actions/catalog-actions/action-types';

const initialState = {
    catalog : []
};

export function catalogReducer(state = initialState, action){
    switch(action.type){
        case FETCH_CATALOG:
            return {...state, catalog: action.payload};
        default:
            return state;
    }
}