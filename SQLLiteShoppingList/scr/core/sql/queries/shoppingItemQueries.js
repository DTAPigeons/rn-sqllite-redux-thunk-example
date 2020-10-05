export const getShoppingItemsQuery = 'SELECT ShoppingList.ID, Catalogue.NAME, ShoppingList.BOUGHT'+
' FROM ShoppingList INNER JOIN Catalogue ON ShoppingList.CATALOGUEID = Catalogue.ID';