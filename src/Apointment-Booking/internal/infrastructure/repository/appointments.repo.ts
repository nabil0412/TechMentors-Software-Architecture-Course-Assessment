import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAppointmentRepo } from '../../domain/contracts/IAppointmentRepo.interface';
import { Appointment } from '../../domain/entities/appointment.entity';
import { AppointmentModel } from '../models/appointment.model';
import { AppointmentEventMapper } from '../mappers/appointmentEvent.mapper';


@Injectable()
export class AppointmentsRepository implements IAppointmentRepo {
  constructor(
    @InjectModel(AppointmentModel.name)
    private readonly appointmentModel: Model<AppointmentModel>,
    private readonly eventBus: EventBus,
  ) {}

  async addAppointment(appointment: Appointment) {
    const appointmentDoc = new this.appointmentModel({
      _id: appointment.appointmentId.value,
      slotId: appointment.slot.slotId.value,
      patientId: appointment.patient.patientId.value,
      patientName: appointment.patient.patientName.value,
      reservedAt: appointment.reservedAt.value,
    });

    await appointmentDoc.save();

    this.eventBus.publishAll(appointment.pullDomainEvents().map(
      AppointmentEventMapper.toDto
    ))

  }
}
