import { Injectable } from '@angular/core';
import {MapOperation} from '../map/map-operation';
import {User} from './user';
import {StoneCardInput} from '../ui/stone-card/stone-card-input';

@Injectable({
  providedIn: 'root'
})
export class UserMapperService implements MapOperation {

  constructor() { }

  map(soruce: User): StoneCardInput {
    return {
      title: soruce.name,
      subTitle: soruce.title,
      description: soruce.description
    } as StoneCardInput;
  }
}
