import {Component, Input, OnInit} from '@angular/core';
import {RepositoryConfig, RepositoryService} from '../../persistence/repository.service';
import {MapOperation} from '../../map/map-operation';
import {CardV2Service} from './card-v2.service';
import {ComponentEvent} from '../../ui/component-event';
import {StoneCardInput} from '../../ui/stone-card/stone-card-input';
import {HttpClient} from '@angular/common/http';
import {User} from '../../app-v2/user';

@Component({
  selector: 'app-card-v2',
  templateUrl: './card-v2.component.html',
  styleUrls: ['./card-v2.component.css']
})
export class CardV2Component implements OnInit {

  card: StoneCardInput;

  @Input() id: string;

  @Input() repository: RepositoryService<any>;

  @Input() mapOperation: MapOperation;

  constructor(private cardV2Service: CardV2Service) {}

  ngOnInit(): void {
    this.cardV2Service.nextCardEvent({id: 'init start'} as ComponentEvent);

    this.repository.get(this.id).subscribe(
      el => this.card = this.mapOperation.map(el),
      error => this.cardV2Service.nextCardEvent({id: 'error - data not fetched', payload: error }),
      () => this.cardV2Service.nextCardEvent({id: 'data fetched', payload: this.card })
    );


    this.cardV2Service.nextCardEvent({id: 'init finished'} as ComponentEvent);
  }

  // TODO event names can not be harcoded, we must have enum
  handleOk($value: StoneCardInput) {
    this.cardV2Service.nextCardEvent({id: 'ok', payload: $value} as ComponentEvent);
  }

  handleCancel() {
    this.cardV2Service.nextCardEvent({id: 'cancel'} as ComponentEvent);
  }
}
