import { fakerEN as faker } from '@faker-js/faker';

export class Mother {
  static random = () => {
    return faker;
  };
}
