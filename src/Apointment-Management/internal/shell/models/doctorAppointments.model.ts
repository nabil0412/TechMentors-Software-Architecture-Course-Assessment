import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ _id: false })
export class DoctorAppointment extends Document {
  @Prop({ type: Types.ObjectId, required: true })
  declare _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'TimeSlot', required: true })
  slotId: Types.ObjectId;

  @Prop({ type: Date, default: Date.now, required: true })
  slotDate: Date;

  @Prop({ type: String, ref: 'Patient', required: true })
  patientName: String;

  @Prop({ type: Boolean, default: false, required: true })
  isCompleted: boolean;

  @Prop({ type: Boolean, default: false, required: true })
  isCancelled: boolean;
}

export const DoctorAppointmentSchema =
  SchemaFactory.createForClass(DoctorAppointment);
