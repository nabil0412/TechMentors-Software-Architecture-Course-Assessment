interface Slot {
  date: Date;
  cost: Number;
}

export class AvailableSlotsResponse {
  constructor(public readonly slots: Slot[]) {}
}
