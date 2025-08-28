import { DomainEvent } from './events/domain.event';

export abstract class Entity {
  protected domainEvents: DomainEvent[] = [];


  public abstract equals(other: Entity): boolean;

  protected addDomainEvent(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  public getDomainEvents(): DomainEvent[] {
    return this.domainEvents;
  }

  public clearDomainEvents(): void {
    this.domainEvents = [];
  }
} 