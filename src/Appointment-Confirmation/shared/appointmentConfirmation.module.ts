import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { AppointmentConfirmationHandler } from "../internal/application/handlers/appointmentConfirmation.handler";
import { AppointmentConfirmationRepository } from "../internal/infrastructure/appointmentConfirmation.repo";

@Module({
  imports: [
    CqrsModule
  ],

  providers: [
    AppointmentConfirmationHandler,AppointmentConfirmationRepository
  ],

  exports:[
    
  ],
    
  controllers: [],

})
export class AppointmentConfirmationModule {}
