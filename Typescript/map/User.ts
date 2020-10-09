import faker from 'faker';
import { IMappable } from './CustomMap';

export class User implements IMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'yellow';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `
    <div>
      <h1>User: ${this.name}</h1>
    </div>
    `;
  }
}
