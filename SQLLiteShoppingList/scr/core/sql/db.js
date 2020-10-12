import SQLite from 'react-native-sqlite-storage';

export class DataBase {
  #_db = undefined;

  constructor() {
    this._open();
  }

  _open() {
    this.#_db = SQLite.openDatabase(
      {
        name: 'sqldb.db',
        location: 'default',
        createFromLocation: '~www/sqldb.db',
      },
      () => {
        SQLite.DEBUG = true;
      },
    );
  }

  close() {
    this.#_db.close();
    this.#_db = undefined;
  }

  executeQuery = (qeury, params = []) =>
    new Promise((resolve, reject) => {
      this.#_db.transaction((transaction) => {
        transaction.executeSql(
          qeury,
          params,
          (transaction, result) => {
            let items = [];
            let data = result.rows;

            let resultLength = data.length ? data.length : result.rowsAffected;

            for (let i = 0; i < resultLength; i++) {
              items.push({...data.item(i)});
            }

            resolve(items);
          },
          (error) => {
            reject(error);
          },
        );
      });
    });
}
