import { Controller, Patch, Param, Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import type { Response } from 'express';
import { CancelAppointmentService } from '../../core/application/commands/cancel-appointment/cancelAppointment.service';
import { CancelAppointmentCommand } from '../../core/application/commands/cancel-appointment/cancelAppointment.command';

@Controller()
export class CancelAppointmentController {
  constructor(
    private readonly cancelAppointmentService: CancelAppointmentService,
  ) {}

  @Patch('api/management/:id/cancel')
  async cancelAppointment(@Param('id') id: string, @Res() res: Response) {
    const command: CancelAppointmentCommand = { appointmentId: id };

    await this.cancelAppointmentService.cancelAppointment(command);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Appointment cancelled succesfully',
    });
  }
}
