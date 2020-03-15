import {
  WaterConsumptionDataCollectionRepository,
  CollectionId,
} from '../../../water-consumption/domain/water-consumption-data-collection.repository';
import { EventPublisher, IEvent } from '@nestjs/cqrs';
import { WaterConsumptionDataCollection } from '../../../water-consumption/domain/water-consumption-data-collection';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryWaterConsumptionDataCollectionRepository
  implements WaterConsumptionDataCollectionRepository {
  private eventStreams: { [key: string]: IEvent[] } = {};

  constructor(private eventPublisher: EventPublisher) {}

  save(consumption: WaterConsumptionDataCollection): Promise<void> {
    const events = consumption.getUncommittedEvents();
    const foundStream = this.eventStreams[consumption.id.raw];
    if (!foundStream) {
      this.eventStreams[consumption.id.raw] = [...events];
    } else {
      this.eventStreams[consumption.id.raw].push(events);
    }
    this.eventPublisher.mergeObjectContext(consumption).commit();
    return Promise.resolve();
  }

  findAll(): Promise<WaterConsumptionDataCollection[] | null> {
    throw new Error('Method not implemented.');
  }

  findById(id: CollectionId): Promise<WaterConsumptionDataCollection | null> {
    const events = this.eventStreams[id.raw];
    const consumption = new WaterConsumptionDataCollection();
    consumption.loadFromHistory(events);
    return Promise.resolve(consumption);
  }
}
