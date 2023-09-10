import { Mother } from './Mother';

export class NumberGenerator {
  static create() {
    return Mother.random().number.int();
  }
}
