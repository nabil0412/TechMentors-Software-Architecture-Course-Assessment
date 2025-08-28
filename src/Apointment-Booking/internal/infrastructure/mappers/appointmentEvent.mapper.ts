import { AppointmentBookedEvent } from "../../domain/events/appointmentBooked.event";
import { AppointmentEventDto } from "src/Apointment-Booking/shared/events/appointment.event";

export class AppointmentEventMapper {
  static toDto(event: AppointmentBookedEvent): AppointmentEventDto {
    return new AppointmentEventDto(
      event.getAppointmentId(),
      event.getSlotId(),
      event.getSlotDate(),
      event.getPatientName(),
      event.getDoctorName(),
    );
  }
}
