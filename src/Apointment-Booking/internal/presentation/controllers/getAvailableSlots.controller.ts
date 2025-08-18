import { Injectable,Get,Inject,Controller } from "@nestjs/common";
import { IGetAvailableSlots } from "../../application/queries/get-available-slots/getAvailableSlots.handler.interface";

@Controller("/api/booking")
export class GetAvailableSlotsController{

    constructor( @Inject(IGetAvailableSlots) private readonly getAvailableSlotsService : IGetAvailableSlots){
    }


    @Get()
    async getSlots(){
        return this.getAvailableSlotsService.handle()
    }


}