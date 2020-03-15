import { AggregateRoot } from '@nestjs/cqrs';
import { GotWaterConsumptionDomainEvent } from './got-water-consumption.domain-event';
import { Email } from './email.value-object';
import { CollectionId } from './water-consumption-data-collection.repository';

export class WaterConsumptionDataCollection extends AggregateRoot {
  id: CollectionId;
  email: Email;

  getConsumption(email: Email) {
    // check domain rules
    this.apply(new GotWaterConsumptionDomainEvent(CollectionId.new(), email));
  }

  onGotWaterConsumptionDomainEvent(event: GotWaterConsumptionDomainEvent) {
    this.id = event.aggregateId;
    this.email = event.email;
  }
}
