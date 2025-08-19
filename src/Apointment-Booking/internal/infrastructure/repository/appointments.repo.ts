import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAppointmentRepo } from '../../domain/contracts/IAppointmentRepo.interface';
import { AppointmentEntity } from '../../domain/entities/appointment.entity';
import { Appointment } from '../models/appointment.model';

Injectable();
export class AppointmentsRepository implements IAppointmentRepo {
  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<Appointment>,
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
  }

}
