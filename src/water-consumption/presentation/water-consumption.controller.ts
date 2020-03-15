import { Controller, Post, Body } from '@nestjs/common';
import { WaterConsumptionService } from '../application/water-consumption.service';
import { GetWaterConsumptionApiCommand } from '../../water-consumption-api/command/get-water-consumption-api.command';

@Controller('water-consumption')
export class WaterConsumptionController {
  constructor(private readonly service: WaterConsumptionService) {}

  @Post()
  setConsumption(@Body() body: { email: string }): Promise<string> {
    return this.service.execute(new GetWaterConsumptionApiCommand(body.email));
  }
}
