import { Mother } from './Mother';

export class StringGenerator {
  static create = () => {
    return Mother.random().string.sample();
  };
}
