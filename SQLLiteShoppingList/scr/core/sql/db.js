import SQLite from 'react-native-sqlite-storage';

export class DataBase{
    
    #_db = undefined;

    constructor(){
        this._open();
    }
    

    _open(){
        this.#_db = SQLite.openDatabase({
            name: "sqldb.db",
            location: 'default',
            createFromLocation: "~www/sqldb.db"
        },()=>{});
    }

    close(){
        this.#_db.close();
        this.#_db = undefined;
    }

    executeQuery = (qeury, params =[]) => new Promise((resolve, reject)=>{
        this.#_db.transaction((transaction)=>{
            transaction.executeSql(qeury, params, 
                (transaction, result)=>{
                    let items = [];
                    let data = result.rows;


                    for (let i = 0; i < data.length; i++) {
                        items.push({...data.item(i)})                        
                    }

                    resolve(items)
                },(error)=>{reject(error)})
        })
    }); 


}
