import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ _id: false }) 
export class Appointment extends Document {


  @Prop({ type: Types.ObjectId, required:true })
  declare _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'TimeSlot', required: true })
  slotId: Types.ObjectId;

  @Prop({ type: String, required: true })
  patientName: string;

  @Prop({ type: Types.ObjectId, ref: 'Patient', required: true })
  patientId: Types.ObjectId;

  @Prop({ type: Date, default: Date.now, required: true })
  reservedAt: Date;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
