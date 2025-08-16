import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeSlot, timeSlotSchema } from "./internal/infrastructure/models/timeSlot.schema.js";


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TimeSlot.name, schema: timeSlotSchema },
    ]),
  ],
})
export class DoctorAvailabilityModule {}
