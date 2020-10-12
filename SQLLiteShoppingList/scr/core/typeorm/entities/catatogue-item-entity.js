import {EntitySchema} from 'typeorm';

import CatalogueItem from '../models/catalogue-item-model';

export default new EntitySchema({
  name: 'CatalogueItem',
  target: CatalogueItem,
  columns: {
    id: {
      primary: true,
      generated: true,
      type: 'integer',
    },
    name: {
      type: 'varchar',
    },
  },
});
