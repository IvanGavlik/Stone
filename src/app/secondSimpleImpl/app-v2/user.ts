import {Entity} from '../persistence/entity';

export class User extends Entity {
  endpoint: 'test endpint'; // TODO in decorator
  name: string;
  title: string;
  description: string;
}
