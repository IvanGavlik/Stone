import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoneCardInput} from './stone-card-input';

@Component({
  selector: 'app-stone-card',
  templateUrl: './stone-card.component.html',
  styleUrls: ['./stone-card.component.css']
})
export class StoneCardComponent implements OnInit {

  @Input() card: StoneCardInput;

  @Output() onOk: EventEmitter<StoneCardInput> = new EventEmitter<StoneCardInput>();

  @Output() onCancel: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  handleOk() {
    this.onOk.emit(this.card);
  }

  handleCancel() {
    this.onCancel.emit();
  }
}
