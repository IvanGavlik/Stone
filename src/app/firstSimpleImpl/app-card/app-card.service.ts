import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface CardEvent {
  name: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class AppCardService {

  private tableEmitter = new EventEmitter<CardEvent>();
  private tableObservable = this.tableEmitter.asObservable();

  constructor() { }


  public nextCardEvent(tableEvent: CardEvent) {
    this.tableEmitter.emit(tableEvent);
  }

  public onCardEvent(): Observable<CardEvent> {
    return this.tableObservable;
  }

}
