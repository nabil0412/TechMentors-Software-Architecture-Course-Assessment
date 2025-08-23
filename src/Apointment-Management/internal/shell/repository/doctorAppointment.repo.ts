import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorAppointmentEntity } from 'src/Apointment-Management/internal/core/domain/entities/doctorAppointment.entity';
import { IDoctorAppointmentRepo } from 'src/Apointment-Management/internal/core/output-ports/IDoctorAppointmentRepo.interface';
//import { DoctorAvailabilityGateway } from '../gateways/doctorAvailability.gateway';
import { DoctorAppointment } from '../models/doctorAppointments.model';

@Injectable()
export class DoctorAppointmentRepository implements IDoctorAppointmentRepo {
  constructor(
    @InjectModel('DoctorAppointment')
    private readonly doctorAppointmentModel: Model<DoctorAppointment>,
    //private readonly doctorAvailabilityGateway: DoctorAvailabilityGateway,
  ) {}

  async addAppointment(appointment: DoctorAppointmentEntity): Promise<void> {
    const appointmentDoc = new this.doctorAppointmentModel({
      _id: appointment.appointmentId,
      slotId: appointment.slotId,
      slotDate:appointment.slotDate,
      patientName:appointment.patientName,
      isCompleted:appointment.isCompleted,
      isCancelled:appointment.isCancelled,
    });

    await appointmentDoc.save()
  }


  async cancelAppointment(appointment: DoctorAppointmentEntity): Promise<void> {
    const appointmentId_ = appointment.appointmentId;
    await this.doctorAppointmentModel.findByIdAndUpdate(appointmentId_, {
      isCancelled:true,
    });
  }

  async completeAppointment(
    appointment: DoctorAppointmentEntity,
  ): Promise<void> {
    const appointmentId_ = appointment.appointmentId;
    await this.doctorAppointmentModel.findByIdAndUpdate(appointmentId_, {
      isCompleted: true,
    });
  }
}
