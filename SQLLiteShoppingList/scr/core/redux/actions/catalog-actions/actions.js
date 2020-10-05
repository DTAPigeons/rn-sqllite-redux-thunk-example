import * as types from './action-types';
import { getCatalogueItemsQuery } from "../../../sql/queries/catalogueQueries";
import { getCatalogueItemFromData } from "../../../sql/data-processors/data-processor";

export function fetchCatalogAction(){
    return async (dispath, getState) =>{
        const database = getState().dbReducer.database;

        database.executeQuery(getCatalogueItemsQuery).then((result)=>{
            const data = result;
            let catalogue =[];


            for(let i=0; i<data.length; i++){
                catalogue.push(getCatalogueItemFromData(data[i]));
             }


            dispath({
                type: types.FETCH_CATALOG,
                   payload: {
                    catalogue: catalogue
                }
            })

        })
    }
}

/*
export function fetchCatalogSuccessAction(catalogEntier){
    const catalog = createCatalogItemCollectionFromDatabaseEntries(catalogEntier);
    return {
        type: types.FETCH_CATALOG_SUCCESS,
        payload: catalog
    }
}

export function fetchCatalogAction(){
    return {type: types.FETCH_CATALOG};
}

export function syncCatalogAction() {
    return {type: types.SYNC_CATALOG};    
}

export function syncCatalogStopAction() {
    return {type: types.SYNC_CATALOG_STOP};
}*/