import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterConsumptionController } from './water-consumption/water-consumption.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, WaterConsumptionController],
  providers: [AppService],
})
export class AppModule {}
