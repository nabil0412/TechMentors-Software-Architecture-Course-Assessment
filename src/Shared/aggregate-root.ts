import { DomainEvent } from './events/domain.event';
import { Entity } from './entity';

export abstract class AggregateRoot extends Entity {

  public pullDomainEvents(): DomainEvent[] {
    const domainEvents = this.domainEvents;
    this.clearDomainEvents();
    return domainEvents;
  }
}
