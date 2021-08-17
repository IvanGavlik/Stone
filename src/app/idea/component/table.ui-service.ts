import {EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

export interface TableEvent {
  name: string;
  payload: any;
}

// form communication with other components
// all comuncation goes throught TableUIService
export class TableUIService {

  private tableEmitter = new EventEmitter<TableEvent>();
  private tableObservable = this.tableEmitter.asObservable();

  public nextTableEvent(tableEvent: TableEvent) {
    this.tableEmitter.emit(tableEvent);
  }

  public onTableEvent(): Observable<TableEvent> {
    return this.tableObservable;
  }

}
