import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DoctorAvailabilityModule } from './Doctor-Availability/doctorAvailability.module';
import { AppointmentBookingModule } from './Apointment-Booking/shared/appointmentBooking.module';
import { AppointmentConfirmationModule } from './Appointment-Confirmation/shared/appointmentConfirmation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    DoctorAvailabilityModule,
    AppointmentBookingModule,
    AppointmentConfirmationModule

  ],
})
export class AppModule {}
