import {
  insertShoppingItemQuery,
  updateShoppingItemQuery,
} from '../../sql/queries/shoppingItemQueries';

export function executeUpdateQuery(database, item) {
  let updatePayload = {};

  if (!item.ID) {
    updatePayload = {
      query: insertShoppingItemQuery,
      params: [item.CATALOGUEID, 0],
    };
  } else {
    updatePayload = {
      query: updateShoppingItemQuery,
      params: [item.CATALOGUEID, item.bought ? 1 : 0, item.ID],
    };
  }

  return database.executeQuery(updatePayload.query, updatePayload.params);
}
