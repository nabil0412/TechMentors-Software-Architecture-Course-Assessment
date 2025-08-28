import { ValueObject } from 'src/Shared/value-objects/value-object';
import { ValueValidator } from 'src/Shared/value-validator';
import { Types } from 'mongoose';

export class PatientId extends ValueObject<Types.ObjectId> {
  private constructor(value: Types.ObjectId) {
    super(value);
  }

  public static create(id: Types.ObjectId): PatientId {
    this.validate(id);
    return new PatientId(id);
  }

  private static validate(id: Types.ObjectId): void {

    if (ValueValidator.isEmpty(id.toString())) {
      throw new Error('Id field is empty');
    }

    if (!ValueValidator.isValidMongooseId(id.toString())) {
      throw new Error('Id is not a valid mongoose Id');
    }
  }
}
