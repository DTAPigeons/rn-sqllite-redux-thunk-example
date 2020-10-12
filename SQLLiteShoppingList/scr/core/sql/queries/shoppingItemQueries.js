export const getShoppingItemsQuery =
  'SELECT ShoppingList.ID, ShoppingList.CATALOGUEID, Catalogue.NAME, ShoppingList.BOUGHT' +
  ' FROM ShoppingList INNER JOIN Catalogue ON ShoppingList.CATALOGUEID = Catalogue.ID';

export const getShoppingItemByIDQuery =
  getShoppingItemsQuery + ' WHERE ShoppingList.ID = ?';

export const insertShoppingItemQuery =
  'INSERT INTO ShoppingList (CATALOGUEID, BOUGHT) VALUES (?,?)';

export const deleteShoppingItemQuery = 'DELETE FROM ShoppingList WHERE ID = ?';

export const updateShoppingItemQuery =
  'UPDATE ShoppingList SET CATALOGUEID = ?, BOUGHT = ? WHERE ID = ?';
