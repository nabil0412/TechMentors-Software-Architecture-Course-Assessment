import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppointmentEventDto } from 'src/Apointment-Booking/shared/events/appointment.event';
import { DoctorAppointmentEntity } from '../../../domain/entities/doctorAppointment.entity';
import { IDoctorAppointmentRepo } from '../../../output-ports/IDoctorAppointmentRepo.interface';

@EventsHandler(AppointmentEventDto)
export class AddDoctorAppointmentService implements IEventHandler<AppointmentEventDto> {
  constructor(
    @Inject(IDoctorAppointmentRepo)
    private readonly doctorAppointmentRepository: IDoctorAppointmentRepo
  ) {}

  async handle(event: AppointmentEventDto): Promise<void> {
    const appointment = DoctorAppointmentEntity.create(
      event.appointmentId,
      event.slotId,
      event.slotDate,
      event.patientName,
    );

    await this.doctorAppointmentRepository.addAppointment(appointment);
  }
}