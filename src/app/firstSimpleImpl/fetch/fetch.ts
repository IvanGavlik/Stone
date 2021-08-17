export abstract class Entity {
  id: string;
}

// TODO generics
export interface Fetch {

  // TODO promise
  getOne(): Entity;

  getAll(): Entity[];

}

// TODO decorator config
export class User extends Entity {
  name: string;
  aboutMe: string;
}

