import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAppointmentRepo } from '../../domain/contracts/IAppointmentRepo.interface';
import { AppointmentEntity } from '../../domain/entities/appointment.entity';
import { Appointment } from '../models/appointment.model';
import { EventBus } from '@nestjs/cqrs';
import { AppointmentEventDto } from 'src/Apointment-Booking/shared/dtos/appointmentEvent.dto';

@Injectable()
export class AppointmentsRepository implements IAppointmentRepo {
  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<Appointment>,
    private readonly eventBus:EventBus
  ) {}

  async addAppointment(appointment: AppointmentEntity) {
    const appointmentDoc = new this.appointmentModel({
      _id : appointment.appointmentId,
      slotId:appointment.slot.slotId,
      patientId:appointment.patient.patientId,
      patientName:appointment.patient.patientName,
      reservedAt:appointment.reservedAt
    });

    await appointmentDoc.save();
    const events = appointment.pullDomainEvents()
    events.forEach((event) => {
      const eventDTO = new AppointmentEventDto (event.getPatientName(), event.getAppointmentDate(),event.getDoctorName() )
      this.eventBus.publish(eventDTO)
    });
  }

}
