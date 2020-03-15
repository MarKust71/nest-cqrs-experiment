import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterConsumptionModule } from './water-consumption/water-consumption.module';
import { WaterConsumptionApiModule } from './water-consumption-api/water-consumption-api.module';

@Module({
  imports: [WaterConsumptionModule, WaterConsumptionApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
