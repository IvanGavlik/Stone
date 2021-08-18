import {Entity} from './entity';
import {Observable} from 'rxjs';


export interface Repository { // TODO <ENTITY extends Entity>

  get<ENTITY extends Entity>(id: string): Observable<any>;

  getALL<ENTITY extends Entity>(): Observable<ENTITY[]>;

  create<ENTITY extends Entity>(entiy: ENTITY): Observable<ENTITY>;

  update<ENTITY extends Entity>(entiy: ENTITY): Observable<ENTITY>;

  delete<ENTITY extends Entity>(entiy: ENTITY): Observable<{}>;

  // TODO SELECT FOR QUERIES ON ENETIY select(?) : Observable<ENTITY[]>;
}
