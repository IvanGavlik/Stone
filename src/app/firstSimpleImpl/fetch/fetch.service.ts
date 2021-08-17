import { Injectable } from '@angular/core';
import {Entity, Fetch, User} from './fetch';

// TODO LOOK AT AbstractCrusd Service
@Injectable({
  providedIn: 'root'
})
export class FetchService implements Fetch {

  constructor() { }

  getAll(): Entity[] {
    return [];
  }

  getOne(): Entity {
    return {
      name: 'Lorem Ipsum',
      aboutMe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }  as User;
  }
}
