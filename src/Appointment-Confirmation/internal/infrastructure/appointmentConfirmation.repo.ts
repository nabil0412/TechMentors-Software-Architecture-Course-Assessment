import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentConfirmationRepository {
  constructor() {}

  sendNotificaiton(event) {
    console.log(
      `📢 Confirmation: Appointment booked for patient ${event.patientName} with ${event.doctorName} on ${event.slotDate}`,
    );
  }
}
