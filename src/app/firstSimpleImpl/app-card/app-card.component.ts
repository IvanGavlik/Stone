import {Component, Input, OnInit} from '@angular/core';
import {FetchService} from '../fetch/fetch.service';
import {MapOperationService} from '../map/map-operation.service';
import {CardDto} from '../ui/card/card-dto';
import {Entity, User} from '../fetch/fetch';
import {AppCardService, CardEvent} from './app-card.service';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {

  @Input() displaySubtitle: boolean;

  @Input() myFetch: FetchService;

  card: CardDto;

  constructor(private fetch: FetchService,
              private mapOperation: MapOperationService,
              private cardService: AppCardService) { }

  ngOnInit(): void {

    if (this.myFetch) {
      this.fetch = this.myFetch;
    }

    const carrEntity: Entity = this.fetch.getOne();
    this.card = this.mapOperation.map(carrEntity);
  }

  handleCancel() {
    this.cardService.nextCardEvent({name: 'cancel'} as CardEvent);
  }

  handleOk() {
    this.cardService.nextCardEvent({name: 'ok', payload: this.card} as CardEvent);
  }
}
