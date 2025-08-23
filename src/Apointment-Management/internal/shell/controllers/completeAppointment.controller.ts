import { Controller, Patch, Param, Res } from '@nestjs/common';
import { CompleteAppointmentService } from '../../core/application/commands/complete-appointment/completeAppointment.service';
import { CompleteAppointmentCommand } from '../../core/application/commands/complete-appointment/completeAppointment.command';
import { HttpStatus } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class CompleteAppointmentController {
  constructor(
    private readonly completeAppointmentService: CompleteAppointmentService,
  ) {}

  @Patch('api/management/:id/complete')
  async completeAppointment(@Param('id') id: string, @Res() res: Response) {
    const command: CompleteAppointmentCommand = { appointmentId: id };

    await this.completeAppointmentService.completeAppointment(command);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Appointment marked as completed',
    });
  }
}
