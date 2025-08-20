import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorAvailabilityModule } from 'src/Doctor-Availability/doctorAvailability.module';
import { IGetAvailableSlots } from '../internal/application/queries/get-available-slots/getAvailableSlots.handler.interface';
import { IAppointmentRepo } from '../internal/domain/contracts/IAppointmentRepo.interface';
import { IPatientRepo } from '../internal/domain/contracts/IPatientRepo.interface';
import { DoctorAvailabilityGateway } from '../internal/infrastructure/gateways/doctorAvailability.gateway';
import { Appointment, AppointmentSchema } from '../internal/infrastructure/models/appointment.model';
import { Patient, PatientSchema } from '../internal/infrastructure/models/patient.model';
import { getAvailableSlotsHandler } from '../internal/infrastructure/query-handlers/getAvailableSlots.handler';
import { AppointmentsRepository } from '../internal/infrastructure/repository/appointments.repo';
import { PatientsRepository } from '../internal/infrastructure/repository/patients.repo';
import { GetAvailableSlotsController } from '../internal/presentation/controllers/getAvailableSlots.controller';
import { ISlotRepo } from '../internal/domain/contracts/ISlotRepo.interface';
import { SlotsRepository } from '../internal/infrastructure/repository/slots.repo';
import { AddAppointmentController } from '../internal/presentation/controllers/addAppointment.controller';
import { addAppointmentService } from '../internal/application/commands/add-appointment/addAppointment.service';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [DoctorAvailabilityModule,
  CqrsModule,
  MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
      { name: Patient.name, schema: PatientSchema },
    ]),
  ],
  providers: [

    {
      provide: IGetAvailableSlots,
      useClass: getAvailableSlotsHandler,
    },
    {
      provide: IAppointmentRepo,
      useClass: AppointmentsRepository,
    },
    {
      provide: IPatientRepo,
      useClass: PatientsRepository,
    },
    {
      provide: ISlotRepo,
      useClass: SlotsRepository,
    },
    addAppointmentService,
    DoctorAvailabilityGateway,
  ],
  controllers: [GetAvailableSlotsController,AddAppointmentController],
})
export class AppointmentBookingModule {}
