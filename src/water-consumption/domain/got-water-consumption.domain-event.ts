import { Email } from './email.value-object';
import { IEvent } from '@nestjs/cqrs';
import { CollectionId } from './water-consumption-data-collection.repository';

export class GotWaterConsumptionDomainEvent implements IEvent {
  readonly aggregateId: CollectionId;
  readonly email: Email;
  constructor(aggregateId: CollectionId, email: Email) {
    this.aggregateId = aggregateId;
    this.email = email;
  }
}
