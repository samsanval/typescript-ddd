import { ValueObject } from './ValueObject';
import v4 from 'uuid';
import validate from 'uuid-validate';

export class Uuid extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.checkValidUuid(value);
  }

  static random() {
    return v4();
  }

  private checkValidUuid(value: string) {
    if (!validate(value)) {
      throw new Error(
        `<${this.constructor.name}> does not allow the value <${value}>`,
      );
    }
  }
}
