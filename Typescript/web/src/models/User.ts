import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private date: UserProps) {}

  get(propName: string): string | number {
    return this.date[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.date, update);
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse<UserProps> = await axios.get(
      `http://localhost:3000/users/${this.get('id')}`
    );
    this.set(response.data);
  }

  async save(): Promise<void> {
    const id = this.get('id');

    if (id) {
      const response: AxiosResponse<UserProps> = await axios.put(
        `http://localhost:3000/users/${id}`,
        this.date
      );
    } else {
      const response: AxiosResponse<UserProps> = await axios.post(
        'http://localhost:3000/users',
        this.date
      );
    }
  }
}
