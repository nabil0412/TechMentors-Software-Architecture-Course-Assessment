import { Inject, Injectable } from '@nestjs/common';
import { IDoctorAppointmentRepo } from '../../../output-ports/IDoctorAppointmentRepo.interface';
import { IDoctorAppointmentReadRepo } from '../../../output-ports/IDoctorAppointmentReadRepo.interface';
import { CompleteAppointmentCommand } from './completeAppointment.command';


@Injectable()
export class CompleteAppointmentService {
  constructor(
    @Inject(IDoctorAppointmentRepo)
    private readonly doctorAppointmentRepo: IDoctorAppointmentRepo,
    @Inject(IDoctorAppointmentReadRepo)
    private readonly doctorAppointmentReadRepo: IDoctorAppointmentReadRepo,
  ) {}

  async completeAppointment(command : CompleteAppointmentCommand){
    const appointment = await this.doctorAppointmentReadRepo.getAppointmentById(command.appointmentId)
    if(appointment === null){
        throw new Error("No appointment with this ID exists");
    }
    appointment.complete()

    await this.doctorAppointmentRepo.completeAppointment(appointment)
  }


}
