import { IEvent } from '@nestjs/cqrs';
import { Types } from 'mongoose';

export class AppointmentBookedEvent implements IEvent {
  private constructor(
    private readonly apppointmentId: Types.ObjectId,
    private readonly slotId: Types.ObjectId,
    private readonly slotDate: Date,
    private readonly patientName: String,
    private readonly doctorName: String,
  ) {}

  static create(
    appointmentId:Types.ObjectId,
    slotId:Types.ObjectId,
    slotDate : Date,
    patientName: String,
    doctorName: String,
  ) {
    return new AppointmentBookedEvent(appointmentId,slotId,slotDate,patientName, doctorName);
  }

  getAppointmentId(): Types.ObjectId {
    return this.apppointmentId;
  }

  getSlotId(): Types.ObjectId {
    return this.slotId;
  }

  getSlotDate(): Date {
    return this.slotDate;
  }

  getPatientName(): String {
    return this.patientName;
  }

  getDoctorName(): String {
    return this.doctorName;
  }
}
