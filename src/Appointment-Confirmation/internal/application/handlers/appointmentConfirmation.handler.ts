import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppointmentEventDto } from 'src/Apointment-Booking/shared/dtos/appointmentEvent.dto';
import { AppointmentConfirmationRepository } from '../../infrastructure/appointmentConfirmation.repo';

@EventsHandler(AppointmentEventDto)
export class AppointmentConfirmationHandler implements IEventHandler<AppointmentEventDto> {
  
  constructor(private readonly appointmentConfirmationRepo:AppointmentConfirmationRepository) {
  }
  
    handle(event:AppointmentEventDto) {
      this.appointmentConfirmationRepo.sendNotificaiton(event)
    }
}
