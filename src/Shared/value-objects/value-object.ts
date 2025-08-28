export abstract class ValueObject<T> {
  protected readonly _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public equals(obj: ValueObject<T>): boolean {
    if (!(obj instanceof this.constructor)) {
      return false;
    }
    return JSON.stringify(this._value) === JSON.stringify(obj._value);
  }

  public get value():T{
    return this._value
  }

}
