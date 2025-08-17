import { AddSlotService } from "src/Doctor-Availability/internal/service/Commands/Add-Slot/addSlot.service";
import { Controller,Post,Body,Res } from "@nestjs/common";
import { AddSlotRequest } from "../dtos/requests/addSlotRequest.dto";
import { AddSlotCommand } from "src/Doctor-Availability/internal/service/Commands/Add-Slot/addSlot.command";
import { HttpStatus } from "@nestjs/common";
import type { Response } from 'express';



@Controller('api/slots')
export class AddSlotController {
  constructor(private readonly slotService: AddSlotService) {}

  @Post() 
  async createSlot(@Body() request: AddSlotRequest, @Res() res: Response) {
    
    const command :AddSlotCommand = {
      date: new Date(request.date),
      cost: request.cost
    }
    try{
      await this.slotService.createSlot(command);
    }catch(error){
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error occurred',
      });
    }


    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'Slot created successfully',
    });
  }
}