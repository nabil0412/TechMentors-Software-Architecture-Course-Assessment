import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeSlot, timeSlotSchema } from "./internal/infrastructure/models/timeSlot.schema.js";
import { TimeSlotReadRepoistory } from './internal/infrastructure/repository/timeSlot.readRepo.js';
import { TimeSlotRepository } from './internal/infrastructure/repository/timeSlot.repo.js';
import { AddSlotController } from './internal/presentation/controllers/addSlot.controller.js';
import { ViewSlotController } from './internal/presentation/controllers/viewSlot.controller.js';
import { AddSlotService } from './internal/service/Commands/Add-Slot/addSlot.service.js';
import { ViewSlotsService } from './internal/service/Queries/View-Slots/viewSlots.service.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TimeSlot.name, schema: timeSlotSchema },
    ]),
    
  ],

  controllers: [AddSlotController,ViewSlotController],
  providers: [AddSlotService,ViewSlotsService, TimeSlotRepository,TimeSlotReadRepoistory,ViewSlotsService],
})
export class DoctorAvailabilityModule {}
