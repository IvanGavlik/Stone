import { Injectable } from '@angular/core';
import {MapOperation} from './map-operation';
import {CardDto} from '../ui/card/card-dto';

@Injectable({
  providedIn: 'root'
})
export class MapOperationService implements MapOperation<any, any> {

  constructor() { }

  map(source: any): any {
    return {
      title: source.name,
      description: source.aboutMe,
      subtitle: null
    } as CardDto;
  }
}
