import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DoctorAppointmentEntity } from 'src/Apointment-Management/internal/core/domain/entities/doctorAppointment.entity';
import { IDoctorAppointmentReadRepo } from '../../core/output-ports/IDoctorAppointmentReadRepo.interface';
import { DoctorAppointment } from '../models/doctorAppointments.model';

@Injectable()
export class DoctorAppointmentReadRepository
  implements IDoctorAppointmentReadRepo
{
  constructor(
    @InjectModel('DoctorAppointment')
    private readonly doctorAppointmentModel: Model<DoctorAppointment>,
  ) {}

  async getPendingAppointments(): Promise<DoctorAppointmentEntity[]> {
    const appointments = await this.doctorAppointmentModel.find({
      slotDate: { $gte: new Date() },
      isCompleted: false,
      isCancelled: false,
    });

    const entities: DoctorAppointmentEntity[] = appointments.map((doc) =>
      DoctorAppointmentEntity.fromPresistence(
        doc._id,
        doc.slotId,
        doc.slotDate,
        doc.patientName,
        doc.isCompleted,
        doc.isCancelled,
      ),
    );

    return entities;
  }

  async getAppointmentById(
    appointmentId: String,
  ): Promise<DoctorAppointmentEntity | null> {
    const appointment =
      await this.doctorAppointmentModel.findById(new Types.ObjectId(appointmentId.toString()));
    if (!appointment) {
      return null;
    }

    const entity = DoctorAppointmentEntity.fromPresistence(
      appointment._id,
      appointment.slotId,
      appointment.slotDate,
      appointment.patientName,
      appointment.isCompleted,
      appointment.isCancelled,
    );

    return entity;
  }
}
