export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<Type extends Primitives> {
  constructor(protected value: Type) {
    this.checkValue(value);
  }

  equals(value: ValueObject<Type>): boolean {
    return (
      value.constructor.name === this.constructor.name &&
      value.value === this.value
    );
  }

  toString(): string {
    return this.value.toString();
  }

  private checkValue(value: Type) {
    if (value === null || value === undefined) {
      throw new Error('Value must be defined');
    }
  }
}
