import { OPEN_DB_ACTION, CLOSE_DB_ACTION } from "../db-actions/action-types";
import { DataBase } from "../../../sql/db";

export const openDBAction = ()=>{
    return async (dispath, getState)=>{
        try{
                const db = new DataBase();
                dispath({
                    type: OPEN_DB_ACTION,
                    payload: {
                        database: db,
                        error: ""
                    }
                })
            
        }
        catch(error){
            dispath({
                type: OPEN_DB_ACTION,
                payload: {
                    database: undefined,
                    error: error
                }
            })
        }

    }

}

export const closeDBAction = ()=>{
    return (dispath, getState) => {
        database = getState().dbReducer.database;

        database.close();
        dispath({
            type: CLOSE_DB_ACTION
        })
    }

}