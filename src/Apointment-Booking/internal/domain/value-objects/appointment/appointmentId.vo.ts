import { ValueObject } from 'src/Shared/value-objects/value-object';
import { ValueValidator } from 'src/Shared/value-validator';
import mongoose from 'mongoose';
import { Types } from 'mongoose';

export class AppointmentId extends ValueObject<Types.ObjectId> {
  private constructor(value: Types.ObjectId) {
    super(value);
  }

  public static create(): AppointmentId {
    return new AppointmentId(AppointmentId.generateId());
  }

  private static generateId(): Types.ObjectId {
    return new mongoose.Types.ObjectId();
  }
}
