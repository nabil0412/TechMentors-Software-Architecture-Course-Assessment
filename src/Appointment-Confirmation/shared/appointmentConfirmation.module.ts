import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { AppointmentConfirmationHandler } from "../internal/handlers/appointmentConfirmation.handler";

@Module({
  imports: [
    CqrsModule
  ],

  providers: [
    AppointmentConfirmationHandler
  ],

  exports:[
    
  ],
    
  controllers: [],

})
export class AppointmentConfirmationModule {}
