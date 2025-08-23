import { IEvent } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class AppointmentCancelledEvent implements IEvent {
  constructor(
    public readonly appointmentId: Types.ObjectId,
    public readonly slotId: Types.ObjectId,
    public readonly slotDate: Date,
    public readonly patientName: String,
  ) {}
}
