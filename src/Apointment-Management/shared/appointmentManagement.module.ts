import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorAvailabilityModule } from 'src/Doctor-Availability/shared/doctorAvailability.module';
import { CancelAppointmentService } from '../internal/core/application/commands/cancel-appointment/cancelAppointment.service';
import { CompleteAppointmentService } from '../internal/core/application/commands/complete-appointment/completeAppointment.service';
import { AddDoctorAppointmentService } from '../internal/core/application/event-handlers/add-appointment/addDoctorAppointment.service';
import { GetPendingAppointmentsService } from '../internal/core/application/queries/getPendingAppointments.service';
import { IDoctorAppointmentReadRepo } from '../internal/core/output-ports/IDoctorAppointmentReadRepo.interface';
import { IDoctorAppointmentRepo } from '../internal/core/output-ports/IDoctorAppointmentRepo.interface';
import { CancelAppointmentController } from '../internal/shell/controllers/cancelAppointment.controller';
import { CompleteAppointmentController } from '../internal/shell/controllers/completeAppointment.controller';
import { GetPendingAppointmentsController } from '../internal/shell/controllers/getPendingAppointments.controller';
import {
  DoctorAppointment,
  DoctorAppointmentSchema,
} from '../internal/shell/models/doctorAppointments.model';
import { DoctorAppointmentReadRepository } from '../internal/shell/repository/doctorAppointment.readRepo';
import { DoctorAppointmentRepository } from '../internal/shell/repository/doctorAppointment.repo';

@Module({
  imports: [CqrsModule,
    MongooseModule.forFeature([
      { name: DoctorAppointment.name, schema: DoctorAppointmentSchema },
    ]),
    DoctorAvailabilityModule,
  ],

  providers: [
    {
      provide: IDoctorAppointmentRepo,
      useClass: DoctorAppointmentRepository,
    },
    {
      provide: IDoctorAppointmentReadRepo,
      useClass: DoctorAppointmentReadRepository,
    },

    AddDoctorAppointmentService,
    GetPendingAppointmentsService,
    CompleteAppointmentService,
    CancelAppointmentService
  ],
  controllers: [GetPendingAppointmentsController,CompleteAppointmentController,CancelAppointmentController],
  exports: [],
})
export class AppointmentManagementModule {}
