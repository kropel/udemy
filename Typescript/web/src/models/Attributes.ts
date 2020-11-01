export class Attributes<T> {
  constructor(private date: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.date[key];
  }

  set = (update: T): void => {
    Object.assign(this.date, update);
  };

  getAll(): T {
    return this.date;
  }
}
