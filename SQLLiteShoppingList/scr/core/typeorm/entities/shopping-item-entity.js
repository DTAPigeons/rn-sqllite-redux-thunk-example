import {EntitySchema} from 'typeorm';
import ShoppingItem from '../models/shopping-item-model';
import CatalogueItem from '../models/catalogue-item-model';

export default new EntitySchema({
  name: 'ShoppingItem',
  target: ShoppingItem,
  columns: {
    id: {
      primary: true,
      type: 'integer',
      generated: true,
    },
    bought: {
      type: 'integer',
    },
  },

  relations: {
    catalogueItem: {
      target: CatalogueItem,
      type: 'many-to-one',
      joinTable: true,
      eager: true,
    },
  },
});
