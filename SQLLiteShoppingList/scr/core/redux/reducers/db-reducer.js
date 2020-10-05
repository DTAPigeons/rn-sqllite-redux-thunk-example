import { OPEN_DB_ACTION, CLOSE_DB_ACTION } from "../actions/db-actions/action-types";

const initialState = {
    database: undefined,
    dbReady: false,
    error: ""
}

export const dbReducer = (state = initialState, action)=>{
    let {type, payload} = action;
    switch(type){
        case OPEN_DB_ACTION:
            return {...state, ...payload, dbReady: true}
        case CLOSE_DB_ACTION:
            return {...state, database: undefined, error: "", dbReady: false}
        default:
            return state;
    }
}