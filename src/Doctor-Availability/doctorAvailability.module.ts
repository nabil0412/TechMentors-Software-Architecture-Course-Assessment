import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeSlot, timeSlotSchema } from "./internal/infrastructure/models/timeSlot.schema.js";
import { AddSlotController } from './internal/presentation/controllers/addSlot.controller.js';
import { AddSlotService } from './internal/service/Commands/Add-Slot/addSlot.service.js';
import { TimeSlotRepository } from './internal/infrastructure/repository/timeSlot.repo.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TimeSlot.name, schema: timeSlotSchema },
    ]),
    
  ],

  controllers: [AddSlotController],
  providers: [AddSlotService, TimeSlotRepository],
})
export class DoctorAvailabilityModule {}
