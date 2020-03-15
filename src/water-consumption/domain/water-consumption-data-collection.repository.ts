import { WaterConsumptionDataCollection } from './water-consumption-data-collection';
import { uuid } from 'uuidv4';

export class CollectionId {
  private readonly type = 'CollectionId';

  constructor(readonly raw: string) {}

  static new() {
    return new CollectionId(uuid());
  }
}

export interface WaterConsumptionDataCollectionRepository {
  save(consumption: WaterConsumptionDataCollection): Promise<void>;
  findAll(): Promise<WaterConsumptionDataCollection[]>;
  findById(id: CollectionId): Promise<WaterConsumptionDataCollection | null>;
}
