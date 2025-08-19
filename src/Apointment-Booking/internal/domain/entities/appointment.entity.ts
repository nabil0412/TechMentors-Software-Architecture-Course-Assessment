import { PatientEntity } from './patient.entity';
import { SlotEntity } from './slot.entity';
import { Types } from 'mongoose';
import mongoose from 'mongoose';

export class AppointmentEntity {
  appointmentId: Types.ObjectId;
  slot: SlotEntity;
  patient: PatientEntity;
  reservedAt: Date;

  private constructor(appointmentId_:Types.ObjectId,slot_: SlotEntity, patient_: PatientEntity, reservedAt_: Date) {
    this.appointmentId = appointmentId_
    this.slot = slot_;
    this.patient = patient_;
    this.reservedAt = reservedAt_;
  }

  static create(
    slot_: SlotEntity,
    patient_: PatientEntity,
  ): AppointmentEntity {
    const appointmentId_ = AppointmentEntity.generateId()
    return new AppointmentEntity(appointmentId_,slot_, patient_, new Date());
  }

  private static generateId ():Types.ObjectId{
    return new mongoose.Types.ObjectId();
  }

  


}
