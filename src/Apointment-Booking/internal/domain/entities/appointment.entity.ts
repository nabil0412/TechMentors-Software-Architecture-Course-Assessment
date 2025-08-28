import mongoose, { Types } from 'mongoose';
import { AppointmentBookedEvent } from '../events/appointmentBooked.event';
import { Patient } from './patient.entity';
import { Slot } from './slot.entity';
import { ReservedAt } from '../value-objects/appointment/reservedAt.vo';
import { AppointmentId } from '../value-objects/appointment/appointmentId.vo';
import { AggregateRoot } from 'src/Shared/aggregate-root';

export class Appointment extends AggregateRoot {
  _appointmentId: AppointmentId;
  _slot: Slot;
  _patient: Patient;
  _reservedAt: ReservedAt;

  get appointmentId(): AppointmentId {
    return this._appointmentId;
  }

  get slot(): Slot {
    return this._slot;
  }

  get patient(): Patient {
    return this._patient;
  }

  get reservedAt(): ReservedAt {
    return this._reservedAt;
  }

  private constructor(
    appointmentId_: AppointmentId,
    slot_: Slot,
    patient_: Patient,
    reservedAt_: ReservedAt,
  ) {
    super()
    this._appointmentId = appointmentId_;
    this._slot = slot_;
    this._patient = patient_;
    this._reservedAt = reservedAt_;
  }

  public static create(
    slot_: Slot,
    patient_: Patient,
  ): Appointment {
    const appointmentId_ = AppointmentId.create()
    const reservedAt_ = ReservedAt.create()
    
    const appointment = new Appointment(
      appointmentId_,
      slot_,
      patient_,
      reservedAt_,
    );


    appointment.addDomainEvent(
      AppointmentBookedEvent.create(
        appointmentId_.value,
        slot_.slotId.value,
        slot_.slotDate.value,
        patient_.patientName.value,
        slot_.doctorName.value,
      ),
    );
    return appointment;
  }

  public equals(other:Appointment){
    return (this._appointmentId === other.appointmentId)
  }

}
