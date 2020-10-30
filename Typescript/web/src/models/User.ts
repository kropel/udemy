import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public event: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(private date: UserProps) {
    this.attributes = new Attributes<UserProps>(date);
  }

  get on() {
    return this.event.on;
  }

  get trigger() {
    return this.event.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
