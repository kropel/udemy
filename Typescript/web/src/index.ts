import { User } from './models/User';

const user = new User({ name: 'Pol', age: 34 });

user.event.on('onChange', () => {
  console.log(`onchange event on ${user.get('name')} user.`);
});

user.event.trigger('onChange');
