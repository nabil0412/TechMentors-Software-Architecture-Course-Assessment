import { IEvent } from "@nestjs/cqrs";

export class AppointmentEventDto implements IEvent {
  constructor(
    public readonly patientName: String,
    public readonly appointmentDate: Date,
    public readonly doctorName: String,
  ) {}
}
