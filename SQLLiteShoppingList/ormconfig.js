import CatalogItemEntity from './scr/core/typeorm/entities/catatogue-item-entity';
import ShoppingItemEntity from './scr/core/typeorm/entities/shopping-item-entity';

export default {
  type: 'react-native',
  database: 'shopping-list',
  location: 'default',
  logging: ['error', 'query', 'schema'],
  synchronize: true,
  entities: [CatalogItemEntity, ShoppingItemEntity],
};
