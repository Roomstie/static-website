export interface ICountdownClock<T extends number | string = number> {
  days: T;
  hours: T;
  minutes: T;
  seconds: T;
}

export type ICountdownLabel = keyof ICountdownClock;
