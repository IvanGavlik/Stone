import {Injectable, Injector} from '@angular/core';
import {Repository} from './repository';
import {Entity} from './entity';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../app-v2/user';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService<E extends Entity> implements Repository {

  constructor() {}

  create<ENTITY extends Entity>(entiy: ENTITY): Observable<ENTITY> {
    return undefined;
  }

  delete<ENTITY extends Entity>(entiy: ENTITY): Observable<{}> {
    return undefined;
  }

  get<ENTITY extends Entity>(id: string): Observable<any> {
    // TODO from where to take url
    // TODO from where to take headerOptions
//    this.httpClient.get<ENTITY>(this.entity.endpoint);
    const user = { name: 'Marko Polo', description: 'Zakon', title: 'istražicac' } as User;
    return of(user);
  }

  getALL<ENTITY extends Entity>(): Observable<ENTITY[]> {
    return undefined;
  }

  update<ENTITY extends Entity>(entiy: ENTITY): Observable<ENTITY> {
    return undefined;
  }
}

export interface RepositoryConfig {
  endpoint: string;
}
