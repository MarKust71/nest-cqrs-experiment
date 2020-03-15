import { Module } from '@nestjs/common';
import { WaterConsumptionController } from './presentation/water-consumption.controller';
import { InMemoryWaterConsumptionDataCollectionRepository } from './infrastructure/in-memory/in-memory-water-consumption-data-collection.repository';
import { GetWaterConsumptionCommandHandler } from './application/get-water-consumption.command-handler';
import { WaterConsumptionService } from './application/water-consumption.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  controllers: [WaterConsumptionController],
  providers: [
    {
      provide: 'WaterConsumptionDataCollectionRepository',
      useClass: InMemoryWaterConsumptionDataCollectionRepository,
    },
    GetWaterConsumptionCommandHandler,
    WaterConsumptionService,
  ],
  imports: [SharedModule],
})
export class WaterConsumptionModule {}
