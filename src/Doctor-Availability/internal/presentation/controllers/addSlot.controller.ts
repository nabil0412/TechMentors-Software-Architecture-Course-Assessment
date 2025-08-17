import { AddSlotService } from "src/Doctor-Availability/internal/service/Commands/Add-Slot/addSlot.service";
import { Controller,Post,Body } from "@nestjs/common";
import { AddSlotRequest } from "../dtos/requests/addSlotRequest.dto";
import { AddSlotCommand } from "src/Doctor-Availability/internal/service/Commands/Add-Slot/addSlot.command";

@Controller('api/slots')
export class AddSlotController {
  constructor(private readonly slotService: AddSlotService) {}

  @Post() 
  async createSlot(@Body() request: AddSlotRequest) {
    
    const command :AddSlotCommand = {
      date: new Date(request.date),
      cost: request.cost
    }
    await this.slotService.createSlot(command);
    return {message: 'Slot created successfully' };
  }
}