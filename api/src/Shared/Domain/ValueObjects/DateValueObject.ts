import { ValueObject } from './ValueObject';

export abstract class DateValueObject extends ValueObject<Date> {
  toDate() {
    return this.value;
  }
}
