import {getRepository, createConnection} from 'typeorm';
import CatalogueItem from './models/catalogue-item-model';
import config from '../../../ormconfig';

export const seedDb = () => {
  createConnection(config)
    .then(() => {
      const catalogueRepo = getRepository(CatalogueItem);
      const item1 = catalogueRepo.create(new CatalogueItem((name = 'Боб')));
      catalogueRepo
        .save(item1)
        .then(() => {
          const cat = catalogueRepo.find();
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
