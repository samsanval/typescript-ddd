import { Mother } from './Mother';

export class UuidMother {
  static create() {
    return Mother.random().string.uuid();
  }
}
