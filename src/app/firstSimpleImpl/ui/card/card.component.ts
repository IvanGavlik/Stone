import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardDto} from './card-dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: CardDto;

  // TODO this shpuld be DTO -> filed -< decorat set
  // BUT we CAN HAVE CASE WHERE SOME CONFIGURATION MUST BE SET ON COMPONENT
  @Input() displaySubtitle: boolean;

  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  @Output() onOk: EventEmitter<CardDto> = new EventEmitter<CardDto>();

  constructor() { }

  ngOnInit(): void {}

  cancel() {
    this.onCancel.emit();
  }

  save() {
    this.onOk.emit(this.card);
  }


}
