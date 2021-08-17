import { Injectable } from '@angular/core';
import {Entity, Fetch, User} from './fetch/fetch';

@Injectable({
  providedIn: 'root'
})
export class MyCustomFetchService implements Fetch {

  constructor() {
  }


  getAll(): Entity[] {
    return [];
  }

  getOne(): Entity {
    return {
      name: 'Lorem Ipsum v2',
      aboutMe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    } as User;

  }
}
