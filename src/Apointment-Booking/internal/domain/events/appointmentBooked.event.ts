import { IEvent } from '@nestjs/cqrs';
import { Types } from 'mongoose';
import { DomainEvent } from 'src/Shared/events/domain.event';

export class AppointmentBookedEvent extends DomainEvent implements IEvent  {
  private constructor(
    private readonly appointmentId: Types.ObjectId,
    private readonly slotId: Types.ObjectId,
    private readonly slotDate: Date,
    private readonly patientName: String,
    private readonly doctorName: String,
  ) {super()}

  static create(
    appointmentId:Types.ObjectId,
    slotId:Types.ObjectId,
    slotDate : Date,
    patientName: String,
    doctorName: String,
  ) {
    return new AppointmentBookedEvent(appointmentId,slotId,slotDate,patientName, doctorName);
  }

  public getAppointmentId(): Types.ObjectId {
    return this.appointmentId;
  }

  public getSlotId(): Types.ObjectId {
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
