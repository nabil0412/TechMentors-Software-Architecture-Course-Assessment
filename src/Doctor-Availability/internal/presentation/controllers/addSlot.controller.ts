import { AddSlotService } from "src/Doctor-Availability/internal/service/Commands/Add-Slot/addSlot.service";
import { Controller,Post,Body } from "@nestjs/common";
import { CreateSlotRequestDto } from "src/Doctor-Availability/shared/dtos/addSlot.dto";

@Controller('api/slots')
export class AddSlotController {
  constructor(private readonly slotService: AddSlotService) {}

  @Post() 
  async createSlot(@Body() request: CreateSlotRequestDto) {
    await this.slotService.createSlot(request);
    return {message: 'Slot created successfully' };
  }
}