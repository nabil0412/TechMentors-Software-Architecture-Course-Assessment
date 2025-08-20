import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { DoctorAvailabilityFacade } from './internal/infrastructure/facades/doctorAvailability.facade';
import {
  TimeSlot,
  timeSlotSchema,
} from './internal/infrastructure/models/timeSlot.schema';
import { TimeSlotReadRepoistory } from './internal/infrastructure/repository/timeSlot.readRepo';
import { TimeSlotRepository } from './internal/infrastructure/repository/timeSlot.repo';
import { AddSlotController } from './internal/presentation/controllers/addSlot.controller';
import { ViewSlotController } from './internal/presentation/controllers/viewSlot.controller';
import { AddSlotService } from './internal/service/Commands/Add-Slot/addSlot.service';
import { ViewSlotsService } from './internal/service/Queries/View-Slots/viewSlots.service';
import { IDoctorAvailabilityAPI } from './shared/contracts/doctorAvailability.facade.interface';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: TimeSlot.name, schema: timeSlotSchema },
    ]),
  ],

  controllers: [AddSlotController, ViewSlotController],
  providers: [
    AddSlotService,
    ViewSlotsService,
    TimeSlotRepository,
    TimeSlotReadRepoistory,
    ViewSlotsService,
    {
      provide:IDoctorAvailabilityAPI,
      useClass:DoctorAvailabilityFacade
    }
  ],

  exports:[
    IDoctorAvailabilityAPI
  ]

})
export class DoctorAvailabilityModule {}
