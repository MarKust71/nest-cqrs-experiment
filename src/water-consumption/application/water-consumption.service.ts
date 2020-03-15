import { GetWaterConsumptionApiCommand } from '../../water-consumption-api/command/get-water-consumption-api.command';
import { CommandBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WaterConsumptionService {
  constructor(private commandBus: CommandBus) {}

  execute(command: GetWaterConsumptionApiCommand) {
    return this.commandBus.execute(command);
  }
}
