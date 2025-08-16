import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TimeSlot extends Document {

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: String, required: true })
  doctorId: string;

  @Prop({ type: String, required: true })
  doctorName: string;

  @Prop({ type: Boolean, required:true,default: false })
  isReserved: boolean;

  @Prop({ type: Number, required: true })
  cost: number;

}

export const timeSlotSchema = SchemaFactory.createForClass(TimeSlot);
