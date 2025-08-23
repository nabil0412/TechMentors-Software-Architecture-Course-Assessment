import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentBookingModule } from './Apointment-Booking/shared/appointmentBooking.module';
import { AppointmentManagementModule } from './Apointment-Management/shared/appointmentManagement.module';
import { AppointmentConfirmationModule } from './Appointment-Confirmation/shared/appointmentConfirmation.module';
import { DoctorAvailabilityModule } from './Doctor-Availability/shared/doctorAvailability.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    DoctorAvailabilityModule,
    AppointmentBookingModule,
    AppointmentConfirmationModule,
    AppointmentManagementModule

  ],
})
export class AppModule {}
