import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

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

  get on(): Eventing['on'] {
    return this.event.on.bind(this.event);
  }

  get trigger(): Eventing['trigger'] {
    return this.event.trigger.bind(this.event);
  }

  get get(): Attributes<UserProps>['get'] {
    return this.attributes.get.bind(this.attributes);
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch((e) => {
        this.trigger('error');
      });
  }
}
