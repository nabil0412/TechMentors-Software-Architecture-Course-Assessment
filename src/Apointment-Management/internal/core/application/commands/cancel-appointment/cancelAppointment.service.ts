import { Inject, Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { IDoctorAppointmentRepo } from '../../../output-ports/IDoctorAppointmentRepo.interface';
import { IDoctorAppointmentReadRepo } from '../../../output-ports/IDoctorAppointmentReadRepo.interface';
import { CancelAppointmentCommand } from './cancelAppointment.command';
import { AppointmentCancelledEvent } from 'src/Apointment-Management/shared/events/appointmentCancelled.event';


@Injectable()
export class CancelAppointmentService {
  constructor(
    @Inject(IDoctorAppointmentRepo)
    private readonly doctorAppointmentRepo: IDoctorAppointmentRepo,
    @Inject(IDoctorAppointmentReadRepo)
    private readonly doctorAppointmentReadRepo: IDoctorAppointmentReadRepo,
    private readonly eventBus : EventBus
  ) {}

  async cancelAppointment(command : CancelAppointmentCommand){
    const appointment = await this.doctorAppointmentReadRepo.getAppointmentById(command.appointmentId)
    if(appointment === null){
        throw new Error("No appointment with this ID exists");
    }
    appointment.cancel()

    this.eventBus.publish(
      new AppointmentCancelledEvent(
        appointment.appointmentId,
        appointment.slotId,
        appointment.slotDate,
        appointment.patientName,
      ),
    );
    await this.doctorAppointmentRepo.cancelAppointment(appointment)
  }


}
