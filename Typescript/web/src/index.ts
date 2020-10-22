import { User } from './models/User';

const user = new User({ name: 'Pol', age: 34 });
user.save();
