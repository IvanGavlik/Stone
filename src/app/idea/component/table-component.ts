import {Entity, Fetch} from '../fetch/fetch';
import {Table, TableDto} from '../table/table';
import {Input, OnInit} from '@angular/core';
import {MapOperation} from '../map/map-operation';
import {TableEvent, TableUIService} from './table.ui-service';

export class TableComponent implements OnInit {


  @Input() fetchOveride: Fetch;

  constructor(private fetch: Fetch,
              private mapOperation: MapOperation<Entity[], TableDto[]>,
              private ui: Table,
              private tableUIService: TableUIService) {}

  ngOnInit(): void {

    // TODO for overiding
    if (this.fetchOveride) {
      this.fetch = this.fetchOveride;
    }

    this.tableUIService.nextTableEvent({name: 'loading start'} as TableEvent);
    const entiyData = this.fetch.getAll();
    const tableData = this.mapOperation.map(entiyData);
    this.ui.displayData(tableData);
    this.tableUIService.nextTableEvent({name: 'loading stop'} as TableEvent);
  }

}
