import mongoose, { Types } from 'mongoose';
import { AppointmentBookedEvent } from '../events/appointmentBooked.event';
import { PatientEntity } from './patient.entity';
import { SlotEntity } from './slot.entity';

export class AppointmentEntity {
  appointmentId: Types.ObjectId;
  slot: SlotEntity;
  patient: PatientEntity;
  reservedAt: Date;
  private bookingEvents: AppointmentBookedEvent[] = [];

  private constructor(
    appointmentId_: Types.ObjectId,
    slot_: SlotEntity,
    patient_: PatientEntity,
    reservedAt_: Date,
  ) {
    this.appointmentId = appointmentId_;
    this.slot = slot_;
    this.patient = patient_;
    this.reservedAt = reservedAt_;
  }

  public static create(
    slot_: SlotEntity,
    patient_: PatientEntity,
  ): AppointmentEntity {
    const appointmentId_ = AppointmentEntity.generateId();
    const appointment = new AppointmentEntity(
      appointmentId_,
      slot_,
      patient_,
      new Date(),
    );
    appointment.bookingEvents.push(
      AppointmentBookedEvent.create(
        appointmentId_,
        slot_.slotId,
        slot_.slotDate,
        patient_.patientName,
        slot_.doctorName,
      ),
    );
    return appointment;
  }

  private static generateId(): Types.ObjectId {
    return new mongoose.Types.ObjectId();
  }

  public pullDomainEvents(): AppointmentBookedEvent[] {
    const events = [...this.bookingEvents];
    this.bookingEvents = [];
    return events;
  }
}
