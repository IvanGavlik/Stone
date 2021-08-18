/*@Entity{
  contentType:
  singleUle
  premmson
}*/
export abstract class Entity {
  id: string;
}

// TODO generics
export interface Fetch {

  // TODO promise
  getOne(): Entity;

  getAll(): Entity[];

}
