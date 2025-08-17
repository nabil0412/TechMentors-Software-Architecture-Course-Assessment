import { Controller,Get } from "@nestjs/common";
import { ControllerViewResponseDto } from "../dtos/responses/controllerViewResponse.dto";
import { ViewSlotsService } from "../../service/Queries/View-Slots/viewSlots.service";

@Controller('api/slots')
export class ViewSlotController {
   constructor(private readonly viewSlotsService: ViewSlotsService) {}

  @Get() 
  async viewSlot() : Promise<ControllerViewResponseDto[]> {
    return await this.viewSlotsService.viewSlots()
  }
}