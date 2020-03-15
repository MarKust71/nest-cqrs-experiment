import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { GetWaterConsumptionApiCommand } from '../../water-consumption-api/command/get-water-consumption-api.command';
import { WaterConsumptionDataCollection } from '../domain/water-consumption-data-collection';
import { WaterConsumptionDataCollectionRepository } from '../domain/water-consumption-data-collection.repository';
import { Email } from '../domain/email.value-object';
import { Inject } from '@nestjs/common';

@CommandHandler(GetWaterConsumptionApiCommand)
export class GetWaterConsumptionCommandHandler
  implements ICommandHandler<GetWaterConsumptionApiCommand> {
  constructor(
    @Inject('WaterConsumptionDataCollectionRepository')
    private readonly repository: WaterConsumptionDataCollectionRepository,
  ) {}

  async execute(command: GetWaterConsumptionApiCommand) {
    const { email } = command;
    const something = new WaterConsumptionDataCollection();
    something.getConsumption(Email.from(email));
    // akcja #1, np. zapis do BD
    // akcja #2, np. wysłanie maila potwierdzającego
    // akcja #3, np. zrealizowanie płatności
    await this.repository.save(something);
    return something.id.raw;
  }
}
