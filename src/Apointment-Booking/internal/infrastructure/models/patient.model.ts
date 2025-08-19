import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Patient extends Document {

  @Prop({ type: String, required: true })
  patientName: string;

}

export const PatientSchema = SchemaFactory.createForClass(Patient);
