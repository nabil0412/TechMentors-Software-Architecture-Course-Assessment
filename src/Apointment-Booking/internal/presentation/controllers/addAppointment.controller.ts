import { Post, Controller, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { addAppointmentService } from '../../application/commands/add-appointment/addAppointment.service';
import type { AddAppointmentDto } from './dtos/addAppointment.dto';
import { HttpStatus } from '@nestjs/common';

@Controller('/api/booking')
export class AddAppointmentController {
  constructor(private readonly addAppointmentService: addAppointmentService) {}

  @Post()
  async addAppointment(
    @Body() request: AddAppointmentDto,
    @Res() res: Response,
  ) {
        
    await this.addAppointmentService.addAppointment(request);

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'Appointment booked successfully',
    });

  }
}
