import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppointmentEventDto } from 'src/Apointment-Booking/shared/dtos/appointmentEvent.dto';

@EventsHandler(AppointmentEventDto)
export class AppointmentConfirmationHandler implements IEventHandler<AppointmentEventDto> {
  
  constructor() {
  }
  
    handle(event:AppointmentEventDto) {
    console.log(
      `📢 Confirmation: Appointment booked for patient ${event.patientName} with ${event.doctorName} on ${event.appointmentDate}`,
    );
  }
}
