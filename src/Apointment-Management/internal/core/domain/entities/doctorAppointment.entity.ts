import { Types } from 'mongoose';

export class DoctorAppointmentEntity {
  
  private constructor(
    public appointmentId: Types.ObjectId,
    public slotId: Types.ObjectId,
    public slotDate: Date,
    public patientName: String,
    public isCompleted: boolean,
    public isCancelled: boolean,
  ) {}

  static create(
    appointmentId_: Types.ObjectId,
    slotId_: Types.ObjectId,
    slotDate_: Date,
    patientName: String,
  ): DoctorAppointmentEntity {
    return new DoctorAppointmentEntity(
      appointmentId_,
      slotId_,
      slotDate_,
      patientName,
      false,
      false
    );
  }

  static fromPresistence(
    appointmentId_: Types.ObjectId,
    slotId_: Types.ObjectId,
    slotDate_: Date,
    patientName_:String,
    isCompleted:boolean,
    isCancelled:boolean
  ): DoctorAppointmentEntity {
    return new DoctorAppointmentEntity(
      appointmentId_,
      slotId_,
      slotDate_,
      patientName_,
      isCompleted,
      isCancelled
    );
  }

  complete() {
    if (this.isCancelled) {
      throw new Error('Cannot complete a cancelled appointment');
    }
    if (this.isCompleted) {
      throw new Error('Appointment already completed');
    }
    this.isCompleted = true;
  }

  cancel() {
    if (this.isCancelled) {
      throw new Error('Appointment already cancelled');
    }
    if (this.isCompleted) {
      throw new Error('Cannot cancel a completed appointment');
    }

    if (this.slotDate.getTime() < new Date().getTime()) {
      throw new Error('Cannot cancel an appointment in the past');
    }

    this.isCancelled = true;
  }


}
