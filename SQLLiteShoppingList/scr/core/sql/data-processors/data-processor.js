import {Item} from 'native-base';

export const getShoppingItemFromData = (itemToProccess) => {
  let shoppingItem = {};

  shoppingItem.ID = itemToProccess.ID;
  shoppingItem.CATALOGUEID = itemToProccess.CATALOGUEID;
  shoppingItem.name = itemToProccess.NAME;
  shoppingItem.bought = itemToProccess.BOUGHT == 1;

  return shoppingItem;
};

export const getCatalogueItemFromData = (itemToProccess) => {
  let catalogueItem = {};

  catalogueItem.ID = itemToProccess.ID;
  catalogueItem.name = itemToProccess.NAME;

  return catalogueItem;
};
