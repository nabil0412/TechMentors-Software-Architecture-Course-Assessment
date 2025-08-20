import { IEvent } from '@nestjs/cqrs';

export class AppointmentBookedEvent implements IEvent {
  private constructor(
    private readonly patientName: String,
    private readonly appointmentDate: Date,
    private readonly doctorName: String,
  ) {}

  static create(
    patientName: String,
    appointmentDate: Date,
    doctorName: String,
  ) {
    return new AppointmentBookedEvent(patientName, appointmentDate, doctorName);
  }

  getPatientName(): String {
    return this.patientName;
  }

  getAppointmentDate(): Date {
    return this.appointmentDate;
  }

  getDoctorName(): String {
    return this.doctorName;
  }
}
