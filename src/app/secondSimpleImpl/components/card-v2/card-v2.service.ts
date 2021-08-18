import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CardEvent} from '../../../firstSimpleImpl/app-card/app-card.service';
import {ComponentEvent} from '../../ui/component-event';

@Injectable({
  providedIn: 'root'
})
export class CardV2Service {

  private cardV2Emitter = new EventEmitter<ComponentEvent>();
  private cardV2Observable = this.cardV2Emitter.asObservable();

  constructor() { }

  public nextCardEvent(event: ComponentEvent) {
    this.cardV2Emitter.emit(event);
  }

  public onCardEvent(): Observable<ComponentEvent> {
    return this.cardV2Observable;
  }

  public onCardOkEvent(): Observable<ComponentEvent> {
    // TODO not implemented but
    // TODO possibility to fire and observe custom event like click on OK button
    return null;
  }


}
